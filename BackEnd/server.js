import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';
import path from 'path';
dotenv.config();
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/products', productRoutes);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "FrontEnd", "dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"FrontEnd","dist","index.html"))
    })
}

console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
    connectDB();
    console.log('Server is running at http://localhost:'+PORT);
});
