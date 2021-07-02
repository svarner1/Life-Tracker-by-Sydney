// Open up the routes/(categoryPage)  file and import the requireAuthenticatedUser middleware
// Add the middleware to both the GET and POST routes.
// In each route, extract the user from res.locals and pass them to the list(category data) ForUser and create(entry) 
//     methods on the (category page) class. Make sure to also pass the order in the create(entry) method
// The GET route should return JSON where the array of orders is stored on the (logged_category) property
// The POST route should return JSON where the new order is is stored on the (logged_item *in model*) property

const express = require("express")
const ExerciseData = require("../models/exercise")
const security = require("../middleware/security")
const router = express.Router()

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals
    console.log( user )
    const exerciseEntry = await ExerciseData.createExerciseEntry({user, exerciseEntry: req.body})
    return res.status(201).json({ exerciseEntry })
  } catch (err) {
    next(err)
  }
})

router.get("/", async (req, res, next) => {
  try {
    const listedExerciseData = await ExerciseData.listExerciseDataForUser()
    return res.status(200).json({ listedExerciseData })
  } catch (err) {
    next(err)
  }
})

router.get("/:exerciseEntryId", async (req, res, next) => {
  try {
    //fetch a single exercise entry
    const { exerciseEntryId } = req.params
    const exerciseEntry = await exerciseEntry.fetchNutritionEntryById(exerciseEntryId)
    return res.status(200).json({ exerciseEntry })
  } catch(err) {
    next(err)
  }
})

module.exports = router
