// const express = require('express')
// const app = express()

// let log = require('./logger')

// sayHello = (name) => {
//     console.log("Hello " + name)
// }

// sayHello('Hope')

// log('hello world')

// app.get('/', function(req, res) {
//     res.send('hello world')
// }).listen(3000)

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**
 * Routes Definitions
 */

// app.get("/", (req, res) => {
//     res.status(200).send("WHATABYTE: Food For Devs");
// });

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});