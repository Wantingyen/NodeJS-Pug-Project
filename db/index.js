const mongoose = require('mongoose')

//Establish Mongodb Connection

module.exports = mongoose
    // @ts-ignore
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => console.log(e))



