import express from "express";
import { getInfo,updateInfo } from "../controllers/info_ctrls";

const info_router = express.Router();

info_router.get('/',getInfo)
info_router.patch('/update/:id',updateInfo)

export default info_router