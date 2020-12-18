const { verifySignUp } = require("../middleware");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    authController.signup
  );

  app.post("/api/auth/signin", authController.signin);

  app.post("/api/auth/workstation", authController.saveRoomData);

  app.post("/api/workstation", userController.userWorkstation);
};
