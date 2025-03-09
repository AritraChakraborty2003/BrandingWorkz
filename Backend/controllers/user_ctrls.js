import userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import { tokenGenerator } from "../utils/tokenGen.js";

export async function profile(req,res) {
    try {
        const {email} = req.user;
        let user = await userModel.findOne({email})
        res.status(200).json({message: user})
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message})
    }
}

export async function signup(req,res) {
    try {
        const {name, email, password, role} = req.body;
        const isAny = await userModel.findOne({email})

        if(isAny) return res.status(409).json({message: 'Already have an account'})

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt, async (err,hash)=>{
                const createdUser = await userModel.create({
                    name,
                    email,
                    password: hash,
                    role
                })
                let token = tokenGenerator(createdUser)
                res.cookie("token",token)
                res.status(200).json({message: createdUser})
            })
        })

    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message})
    }
}

export async function login(req,res) {
    try {
        const {email, password} = req.body
        let user = await userModel.findOne({email});
        if(!user) return res.status(401).json({message: 'Incorrect email or password'})

        bcrypt.compare(password,user.password,(err,bool)=>{
            if(bool){
                let token = tokenGenerator(user)
                res.cookie('token',token)
                res.status(200).json({message: 'You loggedin successfully'});
            }
            else res.status(401).json({message: 'Incorrect email or password'})
        })
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message})
    }
}

export async function update(req,res) {
    try {
        const {name, email, password, role} = req.body

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt, async (err,hash)=>{
                console.log(req.body)
                let whoseOne = await userModel.findOneAndUpdate(
                    {email: req.user.email},
                    { $set:{ name, email, password:hash, role} }
                )
                if(email != req.user.email){
                    let token = tokenGenerator(whoseOne)
                    res.cookie("token",token)
                }
                res.status(200).json({message: 'Info updated',data: whoseOne})
            })
        })
        

    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message})
    }
}

export async function delete_self(req,res){
    try {
        let whoseOne = await userModel.findOneAndDelete({_id: req.params.id})
        if(!whoseOne){
            return res.status(404).json({message: 'User not found'})
        }
        res.status(200).json({message: 'Your account has been deleted successfully',data: whoseOne})
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message})
    }
}

export async function logout(req,res) {
    res.cookie("token","")
    res.status(200).json({message:'Logout successfully'})
}