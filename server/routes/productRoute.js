import express from 'express'
import multer from 'multer';
import { upload } from '../config/multer.js';
import authSeller from '../middlewares/authSeller.js';
import { addProduct, changeStock, productById, productList } from '../controllers/productController.js';


const ProductRouter = express.Router();

ProductRouter.post('/add' , upload.array([images]) , authSeller , addProduct)
ProductRouter.get('/list' , productList)
ProductRouter.get('/id' , productById)
ProductRouter.post('/stock' , authSeller , changeStock)


export default ProductRouter

