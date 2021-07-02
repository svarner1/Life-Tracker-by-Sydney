// Open up the routes/(categoryPage)  file and import the requireAuthenticatedUser middleware
// Add the middleware to both the GET and POST routes.
// In each route, extract the user from res.locals and pass them to the list(category data) ForUser and create(entry) 
//     methods on the (category page) class. Make sure to also pass the order in the create(entry) method
// The GET route should return JSON where the array of orders is stored on the (logged_category) property
// The POST route should return JSON where the new order is is stored on the (logged_item *in model*) property

const express = require("express")
const NutritionData = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()


router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals
    const nutritionEntry = await NutritionData.createNutritionEntry({user, nutritionEntry: req.body})
    return res.status(201).json({ nutritionEntry })
  } catch (err) {
    next(err)
  }
})

router.get("/", async (req, res, next) => {
  try {
    const nutritionData = await NutritionData.listNutritionDataForUser(req.body)
    return res.status(200).json({ nutritionData })
  } catch (err) {
    next(err)
  }
})

router.get("/:nutritionEntryId", async (req, res, next) => {
  try {
    //fetch a single nutrition entry
    const { nutritioneEntryId } = req.params
    const nutritionEntry = await nutritionEntry.fetchNutritionEntryById(nutritionEntryId)
    return res.status(200).json({ nutritionEntry })
  } catch(err) {
    next(err)
  }
})

module.exports = router
