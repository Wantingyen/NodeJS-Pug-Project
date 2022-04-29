const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')
const Recipe = require('../models/Recipe')

// Get all recipe page

router.get('/recipes', (req, res) => {
  res.render('recipes/layout', {
    title: 'All Recipes - Dessert World',
      pageHeader: 'Dessert World',
  })
})

// get categories

router.get('/api/recipes', (req, res) => {
  Category.find ({}, (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  })
})

// get all recipes
router.get('/api/recipes', (req, res) => {
  Recipe.find ({}, (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  })
})

// get single recipes

router.get('/api/recipes/:id', (req, res) => {
  Recipe.findById(req.params.id, (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  })
})


module.exports = router
