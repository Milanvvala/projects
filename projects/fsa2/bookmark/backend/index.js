require('dotenv').config();
const express = require("express"); const app = express()
const connectToMango = require('./database')

connectToMango() //connection to MongoDB Database
app.use(express.json()) // middlewere to send json in body of request
const cors = require('cors'); app.use(cors()) // brouser cors

// Available Routes in routes file
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/tools', require('./routes/tools'))

//example response
app.get('/', (req, res) => { res.send("example response"); console.log("get request") })

//listning port detail
app.listen(process.env.PORT, () => { console.log("Server is running on Port: http://localhost:" + process.env.PORT) })
