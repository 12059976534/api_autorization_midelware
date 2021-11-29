const express=require("express");
const router=express.Router();
// const autoriz=require("../controler/autorization/getToken");
const controler=require("../controler/index");

router.get("/",controler.autorization.getoken);

module.exports=router;

