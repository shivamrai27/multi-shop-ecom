import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide the title'],
        minLength: [5, 'Please provide at least 5 characters'],
        maxLength: [30, 'Title should not exceed 20 characters'],
        unique: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Please provide the price'],
        min: [100, 'price should be atleast 100'],
        max: [100000, 'maximum price should be 100000']
    },
    discount: {
        type: Number,
        required: [true, 'Please provide the discount'],
        min: [0, 'minimu discount should be 0'],
        max: [80, 'maximum discount should be 80']
    },
    image: [{ url: String, size: { type: Number } }],
    rating: {
        count: { type: Number },
        rating: {
            type: Number,
            min: [1, 'min 1 is allowd'],
            max: [5, 'maximum 5 is allowd']
        }
    }
})
export default mongoose.model('Product', productSchema);

