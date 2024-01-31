import User from '../models/userSchema.js'
import bcrypt from 'bcryptjs';

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

        //JWT
        res.json({ message: "logged In" });
    } catch (error) {
        next(error);
    }

}
export const logoutUser = (req, res, next) => {
    res.json({ message: "user register" });
}