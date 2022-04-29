// require dependencies
const express = require('express')
require('dotenv').config()
const pug = require('pug')
const mongoose = require('mongoose')
require('./db')
const homeRoutes = require('./routes/homeRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const recipeRoutes = require('./routes/recipeRoutes')
const contactRoutes = require('./routes/contactRoutes')
//const cors = require('cors') 不知這是什麼middleware
//const config = require('config)

//use routes middleware
//app.use('products', productRouter)


const { NOT_FOUND_MSG, BAD_REQ_DATA } = require('./constants')

// initialize express app
const app = express()

//app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/', homeRoutes)
app.use('/', aboutRoutes)
app.use('/', recipeRoutes)
app.use('/', contactRoutes)
//app.use(expressLayouts) - not defined (Raddy)

//app.set('layout', './layouts/main')

//const routes = require('./server/routes/recipeRoutes.js')
//app.use('/', routes)

// Raddy下面這兩行用了的話，就不會讀取下面pug的標籤
//const routes = require('./routes/homeRoutes.js')
//app.use('/', routes)


// Set Pug
app.set('view engine', 'pug')
app.set('views', './views')



app.get('*', (req, res) => {
    res.status(404).send(NOT_FOUND_MSG)
})

const PORT = process.env.PORT || 3000

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })

    console.log('MongoDB is connected')
})