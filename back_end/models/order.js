//tabellen in de database
const db = require('../config/db');

//Get all products
//ok
const tabelDbUser = {
    fetchAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM product', (err, users, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(users);
            })
        })
    },

    //POST/orders
    createOrder: (order) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO orders SET ?', [order], (err, result, fields) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                resolve(result.insertId);
                console.log(result);
            })
        })
    },
        createOrderLine: (orderID, products) => {
            return new Promise((resolve, reject) => {
                //console.log(result);

                result.map((e, i) => {
                    const orderLine = {
                        orderID: orderID,
                        productID: e.id,
                        qty: e.qty,
                        price: 11
                    }
                    db.query(`INSERT INTO orderline SET ?`, [orderLine], (err, result, fields) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(result);
                    });});})}


/*

                            createOrderLine: (id,product) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO orderline SET ?', [orderLine], (err, result, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },

*/
    /*,
    findPriceByProductId: (productid) => {
        return new Promise((resolve, reject) => {
            db.query('Select * FROM Product where id = ?', [productid], (err, result, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },
   */
/*
    // bestelling/id ok
    findOrder: (id) => {
        return new Promise(((resolve, reject) => {
            db.query('SELECT * FROM orders AS O ' +
                'LEFT JOIN orderLine AS OL ON (O.id = OL.orderid) ' +
                'RIGHT JOIN product as P on (p.id = OL.productid) WHERE O.id = ?'
                , [id], (err, resultFindOrder, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(resultFindOrder);
            })
        }))
    }
   */
};

module.exports = tabelDbUser;