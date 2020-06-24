const express = require('express')
const app = express()

// let log = require('./logger')

// sayHello = (name) => {
//     console.log("Hello " + name)
// }

// sayHello('Hope')

// log('hello world')

app.get('/', function(req, res) {
    res.send('hello world')
}).listen(3000)