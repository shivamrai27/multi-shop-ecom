import User from '../models/userSchema.js'
import 'dotenv/config'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerNewUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        // hasing the password and modifying the password property 
        newUser.password = await bcrypt.hash(newUser.password, 8)
        const user = await User.create(req.body);
        res.json({ user, message: "user registered" });
    } catch (error) {
        next(error);
    }
    // res.json("registered")
}
export const loginUser = async (req, res, next) => {
    try {
        //below we check if user enter email and password or not 
        //then further we check email and password is correct or not
        const { email, password } = req.body
        if (!email) {
            return next(new Error("Please provide email"));
        }
        if (!password) {
            return next(new Error("Please provide password"));
        }

        //fetching email and password from DB stored in user variable 
        //this user contain the complete data of correspondence email in form of object
        const user = await User.findOne({ email: email })
        if (!user) {
            return next(new Error(`${email} is not found`));
        }
        //matching password just by comparing not decrypting bcz bcrypt only support one way encryption
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return next(new Error("Invalid password"));
        }

        //JWT Authentication Autherization -> first step is to generate jwt token with combo of payload and secret key

        // Here we sign() our payload(data like email and password) with some random secrect key and default SH256 algorithm is used to create secure token
        // which is stored in token variable 
        // * payload + random secrect key == some random hased jwt token is generated which contain data
        const token = await jwt.sign({ payload: user }, process.env.JWT_SECRET, { expiresIn: 1 * 60 * 60 });

        // * the main advantage of storing token in cookie is whenever a new request is made on same server the token is also 
        // * transferred or share to server automatically and we can secure our routes

        //Here we create a cookie() with token param and a specific expiry which is stored in user browser for first time and whenever
        //user hit any end point we check it is authorized user or not for doing any CRUD operations
        res.cookie("token", token, { expires: new Date(Date.now() + 360000), httpOnly: true }).status(200).json({ user, token });

        // res.json(email, password);
    } catch (error) {
        next(error);
    }

}

export const logoutUser = (req, res, next) => {
    res.cookie("token", null, { expires: new Date(Date.now()) }).json({
        message: 'Logged out'
    });
}