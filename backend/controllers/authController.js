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
export const loginUser = (req, res, next) => {
    res.json({ message: "user register" });
}
export const logoutUser = (req, res, next) => {
    res.json({ message: "user register" });
}