import jwt from 'jsonwebtoken'

export function tokenGenerator(user){
    return jwt.sign({email: user.email},process.env.JWT_SECRET)
}