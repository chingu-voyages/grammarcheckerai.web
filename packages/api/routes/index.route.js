const routeHandler = require("express").Router();
const { userHandler } = require("../routes/user.routes.js");
const { auth } = require("../routes/auth.routes");
const conversationRouter = require("./conversationRouter");
const testRoute = require("./testRoutes");
const quizRoute = require("./quizRoutes");
const contactRoute = require("./contactRoutes");
const verify = require("../middlewares/auth.middleware");
const quickTranscribe = require("./quickTranscribeRouter");
const newsletter = require("../routes/newsLetterRoute");
const reviewRating = require("../routes/reviewRatingRoute");
const leaderBoardRouter = require("../routes/leaderboardrouter");
const chatHistoryRouter = require("./chatHistory");
const payRoute = require("../routes/payRoute");
const flutRoute = require("../routes/flutRoute");
const isSubscribeRoute = require("./newsLetterSubscriptionRoute");
const logoutRoute = require("./logoutRoute");
const unSubscribeRoute = require("./unSubscribeRoute")

routeHandler.use("/auth", auth);
routeHandler.use("/user", verify, userHandler);
routeHandler.use("/conversation", conversationRouter);
routeHandler.use("/test", testRoute);
routeHandler.use("/quiz", quizRoute);
routeHandler.use("/quickTranscribe", quickTranscribe);
routeHandler.use("/contact", contactRoute);
routeHandler.use("/newsletter", newsletter);
routeHandler.use("/rating", reviewRating);
routeHandler.use("/leaderboard", leaderBoardRouter);
routeHandler.use("/paystack", payRoute);
routeHandler.use("/chathistory", chatHistoryRouter);
routeHandler.use("/subscribe", isSubscribeRoute);
routeHandler.use("/unsubscribe", unSubscribeRoute);
routeHandler.use("/logout", logoutRoute);
routeHandler.use("/subscription", flutRoute)


module.exports = { routeHandler };
