const express = require('express')
const router = express.Router()


// GET contact page

router.get('/contact', (req, res) => {
    res.render('contact/layout', {
        title: 'Contact - Dessert World',
        pageHeader: 'Dessert World',
      })
})

module.exports = router