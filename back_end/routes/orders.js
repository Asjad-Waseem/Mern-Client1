const express = require('express');
const UserController = require('../controllers/orders');
const {body, param, validationResult} = require('express-validator');
const router= express.Router();

//Get all products
//ok
router.get('/products', UserController.getAllProducts);

//GET order/:id
//ok
router.get("/order/:id",
    [
        param('id', 'Parameter moet een getal zijn').trim().isNumeric()
    ],
    (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(404).json({errors: errors.array()});
        }
        UserController.findOder(req, res);
    });


//POST/order
// hier ok
router.post('/order',
    [
        body('firstName', 'First name is required.').notEmpty().trim(),
        body('lastName', 'Last name is required.').notEmpty().trim(),
        body('street', 'Street is required.').notEmpty().trim(),
        body('number', 'Must be numbers').isNumeric().notEmpty().trim(),
        body('postalCode', 'Must be numbers.').isNumeric().notEmpty().trim(),
        body('city', 'City is required.').notEmpty().trim(),
        body('telephone', 'Telephone is required, only numbers.').notEmpty().trim(),
        body('email', 'Email not correct.').isEmail().normalizeEmail().trim(),
        body('product', 'product probleem.'),
        /*
        body('productId', 'ProductId is required.').notEmpty().trim(),
        body('qty', 'quantity is required.').notEmpty().trim(),
         */
    ],
    (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors.array());
            return res.status(400).json({errors: errors.array()});
        }
        UserController.createOrder(req, res);
    })

module.exports = router;