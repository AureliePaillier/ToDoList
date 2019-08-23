const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://AurelieP:19*Calopteryx18@aureliep-spytx.mongodb.net/test?retryWrites=true&w=majority'

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error :'));

const product = require('./routes/product.route');

//Config BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use("/products", product);

app.listen(9090);