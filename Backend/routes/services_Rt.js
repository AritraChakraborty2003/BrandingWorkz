import express from "express";
import { all_Services, add_Service, update_Service, delete_Service } from "../controllers/service_ctrls.js";
import { isLoggedIn } from "../middlewares/auth-middleware.js";

const S_router = express.Router();

S_router.get('/',isLoggedIn,all_Services)
S_router.post('/add',isLoggedIn,add_Service)
S_router.patch('/update/:id',isLoggedIn,update_Service)
S_router.delete('/delete/:id',isLoggedIn,delete_Service)

export default S_router