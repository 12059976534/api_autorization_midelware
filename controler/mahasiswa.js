const db = require("../models")

var controler={};       

controler.posDataMahasiswa = async function(req,res,next){
    console.log("data requess===",req.body)
    try {
        let Todo = await db.Todo.create({
            namawisata:req.body.namawisata,
            pengelola:req.body.pengelola,
            nomertelpon:req.body.nomertelpon,
            nomerwatshap:req.body.nomerwatshap,
            email:req.body.email,
        });
        // console.log("requess body text Todo == ",req.body.text)
        res.status(201).json({
            message:"behasil upload data",
            data:Todo
        })
    } catch (error) {
        console.log("eror posdata:",error);
        res.status(404).json({
            message:error.message
        });
        
    }
}

controler.alldata = async function(req,res){
    try {
        let alldata= await db.Todo.findAll()
        if(alldata.length > 0){
            res.status(200).json({
                message:"get method mahasiswa",
                data:alldata
            })
        }else{
            res.status(200).json({
                message:"get method mahasiswa",
                data:[]
            })
        }
    } catch (error) {
        console.log("eror data all:",error);
        res.status(200).json({
            message:error.message
        })
    }
}

module.exports=controler;