const express = require("express");
const app = express();



require('./startup/db')();

// middlewares
app.use(express.json());



// routes 
app.get('/', (req, res) => {
    res.send("It works");
});
app.use(require('./routes/signup'));


// server
app.listen(5000, () => {
    console.log("Express server started at 5000");
})