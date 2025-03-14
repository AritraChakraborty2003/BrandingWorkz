import jwt from 'jsonwebtoken'

export async function isLoggedIn(req,res,next){
    
    try {
        let token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: 'Please login first'})
        }

        let decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next()
        
    } catch (error) {
        if(error.name == 'TokenExpiredError'){
            return res.status(401).json({message: 'Token expired. Please login again'})
        }else {
            return res.status(500).json({ message: "Internal Server Error." ,error: error.message});
        }
    }
}