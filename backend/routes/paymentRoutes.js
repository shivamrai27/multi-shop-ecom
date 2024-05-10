import express from 'express';
const router = express.Router()
import { processPayment, sendStripeApi } from '../controllers/payment.controller.js';

router.route('/payment').post(processPayment);
router.route('/sendStripeApi').get(sendStripeApi);

export default router;
