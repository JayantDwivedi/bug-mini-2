const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Data = require('../models/data');


router.post('/createissue', (req, res) => {
    console.log(req.body.projectname);
    console.log(req.body.issuename);
    console.log(req.body.priority);
    console.log(req.body.desc);


    // it takes data from frontend 
    const data = new Data({
        _id: new mongoose.Types.ObjectId,
        projectname: req.body.projectname,
        issuename: req.body.issuename,
        priority: req.body.priority,
        desc: req.body.desc,
    });
    data.save().then(() => {
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

// router.get('/signin', (req, res) => {
//     signup.find().exec().then(result => {
//         console.log(result);
//         res.status(200).send(result);
//     }).catch(err => {
//         res.status(500).send(err);
//     })
// })

module.exports = router;