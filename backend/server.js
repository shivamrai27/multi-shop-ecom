import express from 'express';
const app = express();

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import prodctRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'

import { connectDb, cloudinaryConfig } from './config/config.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'
import 'dotenv/config'
import cors from 'cors';

connectDb();
cloudinaryConfig();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', prodctRoutes, authRoutes)

app.use(errorMiddleware)
app.listen(process.env.SERVER_PORT, (c) => {
    console.log('Server is listening at port: ', process.env.SERVER_PORT)
});