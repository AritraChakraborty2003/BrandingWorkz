//Backend code here

/*_____Import Modules & Routers_____*/
import express from 'express'

import M_router from './routes/messages_Rt.js';
import S_router from './routes/services_Rt.js';
import Teck_router from './routes/techstack_Rt.js';
import info_router from './routes/info_Rt.js';
import P_router from './routes/projects_Rt.js';
import User_router from './routes/user_Rt.js';
import cookieParser from 'cookie-parser'
import { connectDB } from './configs/mongoose-config.js';
import dotenv from 'dotenv'

dotenv.config()

// Express Application Instance
const app = express();
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hi! Coder');
});

/*____________Routes_____________*/
app.use('/api/v1/messages',M_router)
app.use('/api/v1/services',S_router)
app.use('/api/v1/techstack',Teck_router)
app.use('/api/v1/info',info_router)
app.use('/api/v1/projects',P_router)
app.use('/api/v1/user',User_router)


app.listen(process.env.PORT, function() {
    console.log('Server started at http://localhost:3000');
});