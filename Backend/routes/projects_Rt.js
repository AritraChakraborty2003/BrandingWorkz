import express from "express";
import { listAll_Projects, Add_Project, delete_Project, Update_Project } from "../controllers/project_ctrls.js";
import { isLoggedIn } from "../middlewares/auth-middleware.js";

const P_router = express.Router();

P_router.get('/',isLoggedIn,listAll_Projects)
P_router.post('/add',isLoggedIn,Add_Project)
P_router.patch('/update/:id',isLoggedIn,Update_Project)
P_router.delete('/delete/:id',isLoggedIn,delete_Project)

export default P_router