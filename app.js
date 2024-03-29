//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Data = require("./models/data");

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

app.get("/viewissue", (req, res) => {
  Data.find()
    .exec()
    .then((result) => {
      res.json(result);

    })
    .catch((err) => {
      console.log(err);
    });


});

app.post("/createissue", (req, res) => {
  //   console.log(req.body.firstname);
  //   console.log(req.body.lastname);
  //   console.log(req.body.email);
  //   console.log(req.body.jobtitle);
  //   console.log(req.body.password);
  const data = new Data({
    _id: new mongoose.Types.ObjectId,
    projectname: req.body.projectname,
    issuename: req.body.issuename,
    priority: req.body.priority,
    desc: req.body.desc,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("Ok");
});


// For delete 
app.delete('/viewissue/:id', (req, res) => {
  const id = req.params.id;
  Data.deleteOne({
    _id: id
  }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error Occured")
    } else {
      res.status(200).json({
        msg: "Sucessfully deleted"
      })
    }
  })
});

// updation Part
app.put('/viewissue/:id', (req, res) => {

  const id = req.params.id;

  const proname = req.body.projectname;
  const issname = req.body.issuename;
  const prio = req.body.priority;
  const descrip = req.body.desc;

  Data.updateOne({
    _id: id
  }, {
    $set: {
      projectname: proname,
      issuename: issname,
      priority: prio,
      desc: descrip
    }
  }).then((result) => {
    console.log(result);
    res.status(200).json({
      msg: "Successfully updated"
    })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({
      msg: "Error Occured"
    })
  })
})

//server
app.listen(5000, () => {
  console.log("server connected at 5000");
});