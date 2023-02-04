
const express = require("express"); const app = express();
const cTMongo = require('./db'); cTMongo();
const router = express.Router();
const port = 1234;
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth')); app.use('/api/notes', require('./routes/notes'))
app.use("/", router);
app.listen(port, function() { console.log("Server is running on Port: http://localhost:" + port); });

{/*
router.route("/insertdata").post(function(req, res) {});
var data = [ 
  { name: "John", age: 21, location: "New York" },
  { name: "Smith", age: 27, location: "Texas" },
  { name: "Lisa", age: 23, location: "Chicago" } ];
employees.insertMany(data, function(err, result) {
  if (err) { res.send(err);
  } else { res.send(result); }
});
router.route("/fetchdata").get(function(req, res) {
  employees.find({}, function(err, result) {
    if (err) { res.send(err);
    } else { res.send(result); }
  });
});*/}