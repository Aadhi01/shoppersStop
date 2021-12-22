const express = require('express')
const router = express.Router();


const {getProducts, addProduct, removeProduct,removeProductById} = require('../controller/productController')

router.route('/products').get(getProducts)  

router.route('/products/new').post(addProduct);
//InProgess. Needs to be looked into later.
// router.route('/products/new/bulk').post(addProductBulk);

router.route('/products').delete(removeProduct);
router.route('/products/:id').delete(removeProductById);
module.exports = router;