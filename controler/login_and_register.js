const db = require("../models")
let controler={}


controler.register = async (req,res,next)=>{
      try {
        let alldata= await db.Todo.findAll()

        if(alldata.length != null){
            let userpermision = await db.Userpermision.create({
                permisionName :  "admin",
            })
            let rollusers = await db.Rooluser.create({
                userpermisionid : 1,
            })
            let rolls = await db.rolls.create({
                roolname:"admin",
                roolusersid:1,
            })
            let user = await db.User.create({
                email:req.body.email,
                password: "admin",
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                companyId: 1,
                rooluserid:1,
            })
            res.status(201).json({
                message:"berhasil uplad data superuser",
                data:user,
            })
        }else{
            var user = await db.User.create({
                email:req.body.email,
                password:req.body.password,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                companyId:req.body.companyId,
                rooluserid:req.body.rooluserid,
            })
        }
      } catch (error) {
          res.status(404).json({
              message:error.message
          })
      }
}


controler.login = async (req,res,next)=>{

} 


