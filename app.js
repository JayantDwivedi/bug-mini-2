//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./models/signup");

//db connections
mongoose
  .connect("mongodb://localhost:27017/bugTracker", {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares

app.use(cors());
app.use(express.json());
// routes

app.get("/signin", (req, res) => {
  User.find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("data");
});

app.post("/signup", (req, res) => {
  //   console.log(req.body.firstname);
  //   console.log(req.body.lastname);
  //   console.log(req.body.email);
  //   console.log(req.body.jobtitle);
  //   console.log(req.body.password);
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    jobTitle: req.body.jobTitle,
    password: req.body.password,
  });
  user
    .save()
    .then(() => {
      console.log("Data Saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("Ok");
});

//server
app.listen(5000, () => {
  console.log("server connected at 5000");
});
