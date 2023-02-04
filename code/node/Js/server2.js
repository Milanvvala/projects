// export const largeNumber = 30
// console.log(largeNumber);
// console.log("object");
// import express from 'express';
// "type": "module",
const express = require('express');
const cTMongo = require('./db');
cTMongo(); 
const app = express();
const port = 3000
//routes
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
