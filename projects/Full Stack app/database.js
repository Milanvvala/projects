const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1/project"
const mongoURI = "mongodb://127.0.0.1/project"
mongoose.set('strictQuery', true);
// mongodb://localhost:27017

const connectToMango = () => {
    mongoose.connect(mongoURI,).then(() => {
        console.log(`successfully connected`);
    }).catch((error) => {
        console.log(`not connected ${error}`);
    });
    console.log("End")
}

module.exports = connectToMango;