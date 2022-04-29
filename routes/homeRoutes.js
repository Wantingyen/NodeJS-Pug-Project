const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')


/* 
GET home page
用pug不用res.send要用res.render，之後第一個數值是file name
*/

router.get('/', (req, res) => {
    // 寫logic在這裡，成立的話就會有下面的isAuthenticated: true
    res.render('homepage/index', {
        title: 'The Best Dessert Recipes',
        pageHeader: 'Dessert World',
        //isAuthenticated: true
      })
})



// App Routes

router.get('/', recipeController.homepage)
router.get('/categories', recipeController.exploreCategories)
router.get('/recipe/:id', recipeController.exploreRecipe)
router.post('/search', recipeController.searchRecipe)

module.exports = router