const router = require('express').Router();
let Arrival = require('../models/arrival.model');

router.route('/').get((req, res) => {
    console.log("iiiii")
    Arrival.find()
        .then(arrival => res.json(arrival))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
    //console.log(req.body.wayTo)
    const wayTo=req.body.wayTo
    const wayFrom=req.body.wayFrom
    Arrival.find({ wayTo,wayFrom  })
        .then(arrival => res.json(arrival))
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
//
// router.route('/:id').delete((req, res) => {
//     Arrival.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Arrival deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });
//
// router.route('/update/:id').post((req, res) => {
//     Goods.findById(req.params.id)
//         .then(ships => {
//             ships.code = Number(req.body.code);
//             ships.shipsname = req.body.shipsname;
//             ships.mass = Number(req.body.mass);
//
//
//             ships.save()
//                 .then(() => res.json('Goods updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;