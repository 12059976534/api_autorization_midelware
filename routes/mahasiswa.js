const express=require("express");
const router=express.Router();
const controler=require("../controler/mahasiswa");
const authmidelwere=require("../controler/autorization/autorization-midelware")
const multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './assets/');
    },
    filename:function(req, file, cb){
        const crypto=require('crypto');
        const random=crypto.randomBytes(10).toString('hex');
        cb(null,random+"_"+file.originalname);
    }
});
const upload = multer({storage:storage});

router.post("/",upload.single("image"),controler.posDataMahasiswa);
router.get("/alldata",authmidelwere("customer:read"),controler.alldata);

module.exports=router;