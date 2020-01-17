const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser middleware
app.use(bodyParser.urlencoded({
  extended: false
})
);
app.use(bodyParser.json());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000; //you can use heroku's port if you choose to deploy there but I chose this for my code

app.listen(port, () => console.log(`Server up and running on port ${port} !`));