let jwt = require("jsonwebtoken");
const usermodel = require("../db/userModel");
let mongoose=require('mongoose')
let{idCharacterValid}=require('../Validation/validator')

//Authentication======================================================>
let authentication = async function (req, res, next) {
    try {
      let token = req.headers["x-api-key"];
      if (!token) {
        return res.send({ status: false, data: "Token  is mandatory" });
      }
      let decodedToken = jwt.verify(token, "imaginet assignment")
  
      if(!decodedToken )  return res.status(400).send({status:false,msg:"the token is invalid"})
  
      req["decodedToken"]=decodedToken
  
      next();
  
    } catch (err) { 
      return res.status(500).send({ status: false, data: err.message });
    }
  };
   
  
  
 
  
  
  
  
  module.exports= {authentication} 
  