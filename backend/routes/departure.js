const router = require('express').Router();
let Departure = require('../models/departure.model');

router.route('/').get((req, res) => {
    Departure.find()
        .then(departure => res.json(departure))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const time = (req.body.time);
    const company = req.body.company;
    const way = (req.body.way);


    const newDeparture= new Departure({
        time,
        company,
        way,
    });
    newDeparture.save()
        .then(() => res.json('departure added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {

    let n = 0;
    Departure.find({id:req.body.idWay})
        .then(departure => {n =departure[0].countOfFreeSeats
    Departure.updateOne({id:req.body.idWay},{countOfFreeSeats:(n-req.body.count)})
        .then(departure =>{
            console.log(departure)
            //console.log(departure[0].countOfFreeSeats)
        })
        .catch(err => res.status(400).json('Error: ' + err));
        })
});

router.route('/find').post((req, res) => {
    //console.log(req.body.wayTo)
    const wayTo=req.body.wayTo
    const wayFrom=req.body.wayFrom
    Departure.find({ wayTo,wayFrom  })
        .then(arrival => res.json(arrival))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Departure.findById(req.params.id)
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