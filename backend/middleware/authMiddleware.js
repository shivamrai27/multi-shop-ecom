import jwt from 'jsonwebtoken';
import 'dotenv/config'
export const isAuthenticatedUser = (req, res, next) => {
    const token = req.cookies.token

    console.log("TOKEN: ", token);
    //Checking is any token is coming form client side or not
    if (!token) {
        next(new Error("You are not authorized, please login to access this page"));
    }
    // verify() the token is valid or not with the secret key and indirectly those token and sec. key combined they give you the actual DB data 
    const { payload } = jwt.verify(token, process.env.JWT_SECRET)
    //appending a new user property with data in req body which can be accessibe to anywhere in the website
    console.log("PAYLOAD: ", payload);
    req.user = payload
    next();
} 