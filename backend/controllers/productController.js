import Product from '../models/productSchema.js';
import * as cloudinary from 'cloudinary';
export const getAllProducts = async function (req, res) {

    const products = await Product.find({})

    res.json(products);
    console.log(products);
}

export const getProductById = async function (req, res, next) {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        if (product) {
            res.json(product)
        } else {
            next(new Error("Product not found"))
        }
    } catch (error) {

        next(error);
    }


    // const { id } = req.params;
    // try {
    //     const product = await Product.findById(id)
    //     if (product) {
    //         res.json(product);
    //     } else {
    //         next(new Error("Product not found"))
    //     }
    // } catch (error) {
    //     next(error);
    // }
}

export const createNewProduct = async function (req, res, next) {
    const newProduct = req.body;


    await cloudinary.v2.uploader.upload(newProduct.image, { folder: 'multishop' }, (error, result) => {
        let secure_url = result.secure_url;
        let public_id = result.public_id;

        //our schema of image property take an array of object here object is build and below converted into array
        let img = {
            secure_url,
            public_id
        }
        newProduct.image = [img]
        console.log(newProduct);
    })

    try {
        const r = Product.create(newProduct);
        // console.log(r);
        res.json({
            newProduct
        });
    } catch (error) {
        // res.json(error);
        next(error);
    }


}

export const updateProduct = function (req, res) {
    res.json("product is updated")
}

export const deleteProduct = function (req, res) {
    res.json("product is deleted")
}

