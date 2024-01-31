import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide the Full name'],
    },
    userName: {
        type: String,
        required: [true, 'Please provide the username'],
    },
    email: {
        type: String,
        required: [true, 'Please provide the email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide the password'],
    },
    avatar: { secure_url: String, public_id: String },

})
const User = mongoose.model('User', userSchema);
export default User;

