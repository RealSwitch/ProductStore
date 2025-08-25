import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json("Internal server error");
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false,message:"All fields are required"});
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct,message:"Product created successfully"});
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false,message:"Invalid Producy ID"})
    }
    const productUpdates = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, productUpdates, { new: true });
        if (!updatedProduct) {
            return res.status(404).json("Product not found");
        }
        res.status(200).json({success:true,data:updatedProduct,message:"Product updated successfully"});
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json("Internal server error");
    }
}
export const deleteProduct =  async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false,message:"Invalid Producy ID"})
    }
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json("Product not found");
        }
        res.status(200).json({success:true,data:deletedProduct,message:"Product deleted successfully"});
    } catch (error) {               
        console.error('Error deleting product:', error);
        res.status(500).json("Internal server error");
    }
}