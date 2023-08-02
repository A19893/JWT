const express=require("express");
const { registerUser, checkUser, checkSession } = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const router=express.Router();

//Route for creating user
router.route("/registerUser").post(registerUser);

//Route for checking user exists
router.route("/checkUser").post(checkUser);

//Route for checking user session
router.route("/checkSession").get(verifyToken,checkSession);
module.exports=router;