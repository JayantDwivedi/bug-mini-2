const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Signup = require('../models/signup');


router.post('/signup', (req, res) => {
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    console.log(req.body.email);
    console.log(req.body.jobTitle);
    console.log(req.body.password);

    // it takes data from frontend 
    const signup = new Signup({
        _id: new mongoose.Types.ObjectId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        password: req.body.password,
    });
    signup.save().then(() => {
        res.status(200).json({
            msg: "succesfully submitted"
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            msg: "Error Occured"
        });
    })
    res.send('ok');

});

module.exports = router;