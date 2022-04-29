const express = require('express')
const router = express.Router()


// Get about page

router.get('/about', (req, res) => {
    res.render('about/aboutlayout', {
        title: 'About Me - Dessert World',
        pageHeader: 'Dessert World',
      })
})


module.exports = router