const { response } = require("express");
const request = require("request");
const Subscription = require("../database/models/subscriptionSchema");
const { initializePayment, verifyPayment } = require("../controller/paystack")(
	request
);
paystackRouter = require("express").Router();
paystackRouter.get("/", async (req, res) => {
	const subscriptions = await Subscription.find();
	return res.status(200).send({ status: "ok", data: subscriptions });
});
paystackRouter.post("/pay", async (req, res) => {
	const form = req.body;
	form.metadata = {
		full_name: form.name,
	};
	form.amount *= 100;
	initializePayment(form, async (error, body) => {
		if (error) {
			//handle errors
			console.log(error);
			return res
				.status(400)
				.send({ success: false, message: "Something went wrong" });
		}
		var response = JSON.parse(body);
		await Subscription.create({
			email: form.email,
			subscriptionId: form.subscriptionId,
			amount: form.amount,
			paymentGateway: "paystack",
			txref: response.data.reference,
		});
		return res.status(200).send({ success: true, data: response });
	});
});
paystackRouter.get("/verify", async (req, res) => {
	const { ref } = req.body;
	verifyPayment(ref, async (error, body) => {
		if (error) {
			console.log(error);
			return res
				.status(400)
				.send({ success: false, message: "Something went wrong" });
		}
		var response = JSON.parse(body);
		const updateStatus = await Subscription.findOne({
			txref: response.data.reference,
		});
		if (!updateStatus)
			return res
				.status(400)
				.send({ sucess: false, message: "No transaction found" });

		await Subscription.findByIdAndUpdate(updateStatus._id, {
			status: response.data.status,
		});
		const data = response.data;
		return res.status(200).send({ success: true, data });
	});
});
module.exports = paystackRouter;
