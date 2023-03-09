// const script2 = require('./script2')
import { largeNumber } from './script2.js'

// const a = script2.largeNumber;
const a = largeNumber;
const b = 50

console.log(a,b)
// console.log(__dirname);
//-----------------------------------------------------------------
// export const largeNumber = 30


// module.exports = {
//     largeNumber: largeNumber
// }

//-----------------------------------------------------------------
const fs = require('fs');

fs.readFile('./test.txt',(err,data)=>{
    if(err){
        console.log('Error')
    }
    console.log(data.toString());
})

//-----------------------------------------------------------------
// import bodyParser from 'body-parser';
import express from 'express'; const app = express();
import { dirname } from 'path'; import { fileURLToPath } from 'url';
// import http from 'http'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(import.meta); console.log(import.meta.url)
console.log(__filename); console.log(__dirname);
app.use(express.static(__dirname + '/public'))
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());
// app.use((req,res,next)=>{
//     console.log('<h1>Milan</h1>')
//     next() });
// app.get('/',(req,res)=>{res.send('Getting Root(/)');});
// app.get('/profile',(req,res)=>{   res.send('Getting Profile');});
// app.post('/profile',(req,res)=>{
//     console.log(req.body)
//     res.send('success');
//     // const user ={    name : 'milan',   age:'25'}res.send(user);});
/*app.get('/',(req,res)=>{
    // console.log(req.query); console.log(req.body); console.log(req.header);
    console.log(req.params);
    //  req.body req.header req.params /:id
    res.status(200).send('success')
    res.send('Getting Root(/)');
})*/
app.listen(3000);
/*app.get('/profile',(req,res)=>{
    const user ={ name : 'milan', age:'25' }
    res.send(user);});*/
/*
const server = http.createServer((request,response)=>{
   // console.log('head',request.headers);console.log('method',request.method)
    console.log('url',request.url)
    const user ={name : 'milan',age:'25'}
    response.setHeader('Content-Type','application/json');
    response.end(JSON.stringify(user));
})
server.listen(3000);}*/
 
//-----------------------------------------------------------------
// export const largeNumber = 30
// console.log(largeNumber);
// console.log("object");
// import express from 'express';
// "type": "module",
// const express = require('express');
// const cTMongo = require('./db');
// cTMongo(); 
// const app = express();
// const port = 3000
// //routes
// app.use(express.json())
// app.use('/api/auth', require('./routes/auth'))
// // app.use('/api/notes', require('./routes/notes'))

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })
//-----------------------------------------------------------------