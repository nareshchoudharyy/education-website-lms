const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb+srv://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_USER_PASSWORD}@cluster0.dt4ttg5.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=${process.env.DATABASE_APP_NAME}`

mongoose.connect(url)
    .then(() => {
        console.log('databse connected successfully');
    })
    .catch((error) => {
        console.log(error);
    });