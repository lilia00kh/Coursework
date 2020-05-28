const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.COMPASS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const arrivalRouter = require('./routes/arrival');
const departureRouter = require('./routes/departure');
const orderRouter = require('./routes/order');


app.use('/arrival', arrivalRouter);
app.use('/departure', departureRouter);
app.use('/order', orderRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});