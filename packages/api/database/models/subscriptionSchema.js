const mongoose = require("mongoose");
const { v4 } = require("uuid");
const { environment } = require("../../config/environment");

const subscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    subscriptionId: {
      type: String,
      required: true,
    },
    interval: {
      type: String,
      enum: ["monthly", "quarterly", "annually", "weekly"],
      default: "monthly",
      required: true,
    },
    paymentGateway: {
      type: String,
      enum: ["paystack", "flutterwave", "stripe"],
      default: "paystack",
    },
    amount: {
      type: Number,
      required: [true, "A subscription must have a price"],
    },
    txref: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      enum: ["initiated", "pending", "succesful", "failed"],
      default: "initiated",
    },
    currency: {
      type: String,
      enum: ["NGN", "USD", "EUR", "YEN", "GBP"],
      default: "NGN",
    },
<<<<<<< HEAD
    expirationDate: {
      type: String,
    },
=======
    expirationDate:{
      type: String
    }
>>>>>>> 6bbdb7183100dc123b5c94865d3d21f80c4b8a61
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = Subscription;
