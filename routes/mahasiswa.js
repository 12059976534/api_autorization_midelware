const express=require("express");
const router=express.Router();
const controler=require("../controler/index");
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

// router.post("/",controler.posDataMahasiswa); // tidak di lengkapi multer tidak suport request melalui form data
router.post("/upload",upload.single("image"),authmidelwere("customer:read"),controler.mahasiswa.posDataMahasiswa);  // dilengkapi multer berpungsi jika reques melalu form data 
router.get("/alldata",authmidelwere("customer:read"),controler.mahasiswa.alldata);
router.get("/dasboard",controler.dasboard.dasboard);    


module.exports=router;