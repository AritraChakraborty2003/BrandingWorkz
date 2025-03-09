import express from "express";
import { getTech,addTech,deleteTech } from "../controllers/techstack_ctrls";

const Teck_router = express.Router();

Teck_router.get('/',getTech)
Teck_router.post('/add',addTech)
Teck_router.delete('/delete/:id',deleteTech)

export default Teck_router