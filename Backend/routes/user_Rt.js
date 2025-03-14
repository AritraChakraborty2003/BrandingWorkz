import express from "express";
import { isLoggedIn } from "../middlewares/auth-middleware.js";
import { profile, signup, login, update, delete_self, logout } from "../controllers/user_ctrls.js";

const User_router = express.Router();

User_router.get('/profile',isLoggedIn,profile)
User_router.post('/signup',signup)
User_router.post('/login',login)
User_router.patch('/update/:id',isLoggedIn,update)
User_router.delete('/delete/:id',isLoggedIn,delete_self)
User_router.get('/logout',logout)

export default User_router