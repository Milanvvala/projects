const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1/test"
mongoose.set('strictQuery', true);
// mongodb://localhost:27017

const cTMongo = () => {
    // mongoose.connect(mongoURI, () => { console.log('connected to mongo') })
    mongoose.connect(mongoURI,).then(()=>{
        console.log(`successfully connected`);
        }).catch((e)=>{
        console.log(`not connected${e}`);
        }); 
}

module.exports = cTMongo;