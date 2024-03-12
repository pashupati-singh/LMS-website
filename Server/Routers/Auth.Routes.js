
const jwt = require("jsonwebtoken")
const express = require("express");
const bcrypt = require("bcrypt");
const { AuthModel } = require("../Models/Auth.model");
const { AuthMiddleware } = require("../Middleware/Auth.Middleware");
const AuthRoutes = express.Router();

AuthRoutes.post("/register",async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        
        const user = await AuthModel.findOne({email})
        if(user){
            return res.json({msg:"Email already exist",email})
        }else{
            bcrypt.hash(password, 5, async (err, hash)=> {
               if(err){
                return res.json({err})
               }else if(hash){
                const user = new AuthModel({name,email,password:hash});
                await user.save();
                res.json({msg : "Successfully register"})
               }          
            });
        }
    } catch (error) {
        res.json({error})
    }
})

AuthRoutes.post("/login",async (req,res) =>{
    try {
        const {email,password} = req.body;
        
        const user = await AuthModel.findOne({email});

        if(user){
            bcrypt.compare(password, user.password, async(err, result)=>{
               if(err){
                return res.json("Invalid I'd or Password")
               }else if(result){
                jwt.sign({ userID:user._id,userName : user.name }, "privateKey", async(err, token)=> {
                    if(err){
                        return res.json({err})
                    }else if(token){
                        return res.json({msg : "Login successfully" , token , name:user.name,admin:user.admin})
                    }
                  });
               }
            });
        }

    } catch (error) {
        res.json({error})
    }
})

AuthRoutes.get("/",AuthMiddleware, async(req,res)=>{
    const {userID} = req.body;
    try {
        const users = await AuthModel.findOne({_id:userID})
        
        if(users.admin){
            console.log(users.admin);
            const user = await AuthModel.find();
            return res.json({ user:user , msg:"get"});
        }else{
            return res.json({msg:"Not Eligible"})
        }
       
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
})

AuthRoutes.put('/users/:Id',AuthMiddleware ,async (req, res) => {
    const Id = req.params.Id;
    const {userID} = req.body;
   
    try {
       
        const userAdmin = await AuthModel.findById({_id:userID});
        
        if(userAdmin.admin === false){
            return res.status(400).json({ message: 'Your Not Admin' });
        }
        
        const user = await AuthModel.findById({_id:Id});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
     
        if (user.admin) {
            return res.status(400).json({ message: 'User is already an admin' });
        }
        
        user.admin = true;
        await user.save();
        
        return res.json({ message: 'User is now an admin' });
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});



module.exports = {AuthRoutes};