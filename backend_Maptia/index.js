require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const middleware = require("./middleware/error");
const adminRoutes = require("./router/adminRoutes")
const userRoutes = require("./router/userRoutes")

mongoose.connect("mongodb+srv://shaz:jtech123@cluster0.rafdx.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('connceted to database')
    })
    .catch((e) => {
        console.log(e, 'conncetion failed')
    });

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});


app.use('/uploads', express.static(__dirname + '/uploads'));
// app.use('/admin', adminRoutes)
// app.use("/", userRoutes);
app.use(middleware.onError);
let server = app.listen(process.env.APP_PORT, () => {
    console.log("Server running on PORT : ", process.env.APP_PORT);
});
module.exports = app;
