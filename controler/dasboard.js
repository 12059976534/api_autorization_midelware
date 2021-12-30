const db = require("../models")
var controler={};


controler.dasboard = async (req,res)=>{
    try {
        let template = await res.render('admin/dasboard')
        res.status(200)(
            template
        )
    } catch (error) {
        
    }

}

module.exports = controler;