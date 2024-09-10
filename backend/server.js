import express, { Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bcryptjs from"bcryptjs";
const app=express();
dotenv.config();
const port=process.env.PORT || 4000;
const URL=process.env.mongodburl

import book from "./model/model.js";
import User from "./model/usermodel.js";

 app.use(cors({
    origin: 'http://localhost:5173'
 }));

app.use(express.json()); 

 const router=express.Router();

 const bookdata= async(req,res)=>{
     try{
         const book2=await book.find();
        res.status(200).json(book2)
    } catch(err){
         res.status(500).json(err)
     }

}
 router.get("/",bookdata);
 app.use("/book",router);


// userr modell    ......

const signup= async (req,res)=>{
    try{
        const{fullname,email,password}=req.body;
        const user= await User.findOne({email})
        console.log(user);
        if(user){
            return res.status(400).json({message:"user already exists"})
        }
        const hashpassword= await bcryptjs.hash(password,10)
        const createdUser=new User({
            fullname: fullname,
            email:email,
            password: hashpassword
        });
        createdUser.save();
       
        res.status(201).json({message:"user created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        }});


        
    } catch(error){
        console.log("error:"+error.message);
res.status(500).json({message:"internal server error"})    }
}

router.post("/signup",signup)
app.use("/user",router);

// loginn.....

const login =async(req, res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const ismatched= await bcryptjs.compare(password,user.password)
        if(!user||!ismatched){
            return res.status(400).json({message:"invalid username or password"});
        }else{
            res.status(200).json({message:"login successfully",user:{
                _id:user._id,
                fullname:user.fullname,
               
                email:user.email,
                // password:user.password

            }})
        }
    }catch(error){
        console.log("error"+error.message);
        res.status(500).json({message:"internal server error"})    


    }
}

router.post("/login",login)
// app.use("/user",router);







 try{
    mongoose.connect(URL)
    console.log("connection is successfully......")
 }catch(error){
     console.log("error:",error)

 }


app.listen(port,()=>{
   console.log(`server is running on port ${port}`)
 });






