import express from 'express'
import authUser from '../middlewares/authUser.js'
import { getAllOrder, getUserOrder, placeOrderCOD } from '../controllers/orderController.js'
import authSeller from '../middlewares/authSeller.js'

const OrderRouter = express.Router()

OrderRouter.post('/cod' , authUser , placeOrderCOD )

OrderRouter.get('/user' , authUser , getUserOrder)

OrderRouter.get('/seller' , authSeller , getAllOrder )


export default OrderRouter