import Product from '../models/productSchema.js';
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
    try {
        const r = await Product.create(newProduct);
        res.json({
            product: r
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

