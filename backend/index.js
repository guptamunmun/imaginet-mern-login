const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const usermodel= require("./db/userModel")
const {isValidEmail , isValidMobileNum,isValidName} = require("./Validation/validator")
const {authentication} = require("./middleware/auth")
const app = express()

app.use(cors())
app.use(express.json())
// sign up
app.post("/register", async (req, res) => {
    let {Email,mobilenumber,Name} = req.body
    if(!isValidEmail(Email))return res.status(400).send({message:"email is not valid"})
    if(!isValidMobileNum(mobilenumber))return res.status(400).send({message:"mobilenumber is not valid"})
    if(!isValidName(Name))return res.status(400).send({message:"Name is not valid"})


    const user = new usermodel(data);
    const response = await user.save();
    const result = {
      name: response.Name,
      email: response.Email,
    };
    res.send(result);
  });

// login user
app.post("/login",authentication, async (req, res) => {
    let data = req.body;
    const { Name,mobilenumber,Email } = data;
    if (!Email) return res.send("email is required");
    if (!mobilenumber) return res.send("mobilenumber is required");
    if (!Name) return res.send("Name is required");


   
  
    let user = await usermodel.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "user not exist" });
    }
  });



mongoose
  .connect("mongodb+srv://jay420:gRLzeLdOa6ENyasF@cluster0.dnkg3q6.mongodb.net/e-commerce",
    { useNewUrlParser: true }
  ) 
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));
  
  // for wrong url
app.use("/*", (req, res) => { 
    res.send("check url");
  });
  
  app.listen(3000, () => {
    console.log("server is running on PORT 3000");
  });