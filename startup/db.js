const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/bug-tracker";

module.exports = function () {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => console.log('connected to db')).catch((err) => console.log('could not connect'));
}