const mongoose = require('mongoose')

const uri = 'mongodb+srv://icode:icodeprogram2022@cluster0.qmuuu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Establish Mongodb Connection

module.exports = mongoose
    // @ts-ignore
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => console.log(e))



