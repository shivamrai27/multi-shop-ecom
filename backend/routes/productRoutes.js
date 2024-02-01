import express from 'express';
const router = express.Router();
import { isAuthenticatedUser } from '../middleware/authMiddleware.js';
import {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct,

} from '../controllers/productController.js';

router.route('/products').get(isAuthenticatedUser, getAllProducts)
router.route('/product/:id').get(getProductById)
router.route('/new/product').post(isAuthenticatedUser, createNewProduct)
router.route('/updateProduct').put(isAuthenticatedUser, updateProduct)
router.route('/deleteProduct').delete(isAuthenticatedUser, deleteProduct)
export default router;