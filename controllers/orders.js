//logica bundelen die je aan URL's wilt koppelen
const Order = require('../models/order');


//Get all products works fine
exports.getAllProducts = (req, res) =>{
    Order.fetchAllUsers()
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err));
};

/*   POST   */
exports.createOrder = (req, res) => {
    /*
    var PriceTotal;
    //stap 1 bereken de totale prijs op basis van product prijs en hoeveelheid
    const searchPrice = {
        productId: req.body.productId,
        qly: req.body.qly,
    }
*/
    /*
    // foreach gebruiken ?
    Order.findPriceByProductId(searchPrice.productId).then(Price => {
        if (Price.length === 0) {
            res.status(404).send('Geen product met productId: ' + searchPrice.productId);
        } else {
            const foundPrice = Price[0];
            PriceTotal = foundPrice * req.body.qly;
        } // gebruik productId
    });
*/
    // stap 2
    const order = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        street: req.body.street,
        number: req.body.number,
        postalCode: req.body.postalCode,
        city: req.body.city,
        telephone: req.body.telephone,
        email: req.body.email,
        totalPrice: 1000, // vul de berekening in van berekenPrijs

        //product: req.body.product, //hier
    };

    const product = req.body.product;



    Order.createOrder(order)
        .then((result) => {
            Order.createOrderLine(result, product)
                .then(() => {
                    res.send({result});
                })
                .catch(err => console.log(err));
        })
        .catch(err => res.status(500).send(err));

}

    // stap 3
    //geef OrderID weer
/*
    const FindOrderID = {}


    // stap 4
    //maak orderLine object aan toevoegen aan de databank
    const orderLine = {
        productId: req.body.productId,
        qty: req.body.qty,
        price: 4444,
    };

    Order.createOrderLine(orderLine)
        .then(orderLine => res.json(orderLine))
       // .catch(err => res.status(500).send(err));
    */
            /*
};
*/
/*
    // bestelling/id ok
    exports.findOder = (req, res) => {
        Order.findOrder(req.params.id)
            .then(resultFindOrder => res.json(resultFindOrder))
            .catch(err => res.status(500).send(err));
    };
*/