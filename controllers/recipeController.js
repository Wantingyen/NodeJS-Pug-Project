require('../db/index.js')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')
const {
    NOT_FOUND_MSG,
    BAD_REQ_DATA,
    SERVER_ERROR_MSG,
    CAN_NOT_REPLACE_RESOURCE
  } = require('../constants')



/**
 *get homepage 
 *
 */

exports.homepage = async(req, res) => {
    res.render('index', { title: 'The Best Dessert Recipes'})
}





  /**
   * All Recipes Page
   */

exports.exploreCategories = async(req, res) => {
    try{
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const cake = await Recipe.find({ 'category': 'Cake'}).limit(limitNumber)
        const cookie = await Recipe.find({ 'category': 'Cookie'}).limit(limitNumber)
        const macaron = await Recipe.find({ 'category': 'Macaron'}).limit(limitNumber)
        const icecream= await Recipe.find({ 'category': 'Ice Cream'}).limit(limitNumber)
        const beverage = await Recipe.find({ 'category': 'Beverage'}).limit(limitNumber)
        const dessert = { cake, cookie, macaron, icecream, beverage }
        res.render('recipes', { title: 'All Recipes - Dessert World', categories } );
    }   catch (error) {
        res.status(500).send(SERVER_ERROR_MSG)
    }
}

/**
 * GET /recipe/:id
 * Recipe 
*/

exports.exploreRecipe = async(req, res) => {
    try {
      let recipeId = req.params.id;
      const recipe = await Recipe.findById(recipeId);
      res.render('recipe', { title: '1', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 


/**
 * POST /search
 * Search 
*/
exports.searchRecipe = async(req, res) => {
    try {
      let searchTerm = req.body.searchTerm;
      let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
      res.render('search', { title: '2', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
    
  }


// async function insertDymmyRecipeData(){
//     try {
//         await Recipe.insertMany([
//             {
//                 'name': 'Strawberry Drip Cake',
//                 'description': 
//                 'This colorful drip cake is made with vanilla cake layers, strawberry frosting and a gorgeous white chocolate ganache drip. This cake is as pleasing to the eye as it is to the sweet tooth!',
//                 'ingredients': [
//                     'all-purpose flour 265g',
//                     'granulated sugar 400g',
//                     'baking powder 6g',
//                     'salt 3g',
//                     'unsalted butter 150g',
//                     'egg whites 160ml',
//                     'vegetable oil 14ml',
//                     'vanilla extract 4ml',
//                     'whipping cream 80ml',
//                 ],
//                 'category': 'Cake',
//                 'image': 'strawberry-drip-cake.jpg'
//             },
            
//         ]);
//     }   catch(error){
//         console.log('err', + error)
//     }
// }

// insertDymmyRecipeData()









// Make sure that you remove this function as it will keep inserting data

// async function insertDymmyCategoryData(){
//     try {
//         await Category.insertMany([
//             {
//                 "name": "Cake",
//                 "image": "c-cake.jpg"
//             },
//             {
//                 "name": "Cookie",
//                 "image": "c-cookie.jpg"
//             },
//             {
//                 "name": "Macaron",
//                 "image": "c-macaron.jpg"
//             },
//             {
//                 "name": "Ice Cream",
//                 "image": "c-icecream.jpg"
//             },
//             {
//                 "name": "Beverage",
//                 "image": "c-beverage.jpg"
//             }
//         ]);
//     }   catch(error){
//         console.log('err', + error)
//     }
// }

// insertDymmyCategoryData()
