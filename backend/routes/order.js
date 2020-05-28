const router = require('express').Router();
let Order = require('../models/order.model');
let Arrival = require('../models/arrival.model');

router.route('/').get((req, res) => {
    console.log("iiiii")
    Order.find()
        .then(arrival => res.json(arrival))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const email = (req.body.email);
    const name = req.body.name;
    const sername = (req.body.sername);
    const count = (req.body.count);
    const numberOfDocument = (req.body.numberOfDocument);
    const idWay = (req.body.idWay);



    const newOrder = new Order({
        email,
        name,
        sername,
        count,
        numberOfDocument
    });
    newOrder.save()
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log("add")
    console.log(req.body.time)
    console.log(req.body.company)
    console.log(req.body.way)
    const time = (req.body.time);
    const company = req.body.company;
    const way = (req.body.way);


    const newArrival = new Arrival({
        time,
        company,
        way,
    });
    console.log(newArrival)
    newArrival.save()
        .then(() => res.json('Arrival added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    console.log("he he he")
    console.log(req.params.id)
    Arrival.findById(req.params.id)
        .then(arrival => res.json(arrival))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;