import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import prodctRoutes from './routes/productRoutes.js'
import { connectDb, cloudinaryConfig } from './config/config.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'
import 'dotenv/config'
import cors from 'cors';

connectDb();
cloudinaryConfig();

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use('/api', prodctRoutes)


app.use(errorMiddleware)
app.listen(process.env.SERVER_PORT, (c) => {
    console.log('Server is listening at port: ', process.env.SERVER_PORT)
});