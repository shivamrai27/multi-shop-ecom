import mongoose from 'mongoose';
import * as cloudinary from 'cloudinary';
import 'dotenv/config'
export const connectDb = async () => {
    try {
        const res = await mongoose.connect(process.env.DB_URI);
        //mongodb://127.0.0.1:27017/e-commerce
        // mongodb+srv://admin:admin@cluster0.hlqkkvi.mongodb.net/?retryWrites=true&w=majority
        console.log("Connected to MongoDB")

    } catch (error) {
        console.log(error.message);
    }
}


export const cloudinaryConfig = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}