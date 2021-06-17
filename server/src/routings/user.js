const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/login", userController.postLogin);
router.put("/passwordreset", userController.passwordReset);
router.post("/register", userController.postRegister);
router.post("/check-role", userController.checkRole);
router.get("/:id", userController.userDetails);

module.exports = router;
