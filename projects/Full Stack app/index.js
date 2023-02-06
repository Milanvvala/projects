const express = require("express");
const connectToMango = require('./database')
const port = 8000;
const app = express()

//connection to MongoDB Database
connectToMango()

// middlewere to send json in body of request
app.use(express.json())

// brouser cors
const cors = require('cors')
app.use(cors())

// Available Routes in routes file
app.use('/api/auth',require('./routes/auth'))
app.use('/api/tools',require('./routes/tools'))

//example response
app.get('/', (req, res) => {
    res.send("response")
    console.log("get request")
})

//listning port detail
app.listen(port,() => {
    console.log("Server is running on Port: http://localhost:" + port)
})
