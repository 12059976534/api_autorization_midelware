const jwt = require("jsonwebtoken");    
var config=require("./config");
var controler={};

// request token
controler.getoken=async function(req,res,nex){

    try {

        const payload = {
            name: "Jimmy",
            scopes: "customer:read"
          };
        const token = jwt.sign(payload, config.JWT_SECRET);
        res.send(token);  
        
    } catch (error) {
        console.log("erornya:",error)
    }
    
}

module.exports=controler;