import express from "express";
import { showAll_Messages, send_Message, delete_Message } from "../controllers/message_ctrls.js";
import { isLoggedIn } from "../middlewares/auth-middleware.js";

const M_router = express.Router();

M_router.get('/',isLoggedIn,showAll_Messages)

M_router.post('/send',send_Message)
M_router.delete('/:id',isLoggedIn,delete_Message)

export default M_router