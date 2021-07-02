// Open up the routes/(categoryPage)  file and import the requireAuthenticatedUser middleware
// Add the middleware to both the GET and POST routes.
// In each route, extract the user from res.locals and pass them to the list(category data) ForUser and create(entry) 
//     methods on the (category page) class. Make sure to also pass the order in the create(entry) method
// The GET route should return JSON where the array of orders is stored on the (logged_category) property
// The POST route should return JSON where the new order is is stored on the (logged_item *in model*) property

const express = require("express")
const SleepData = require("../models/sleep")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const sleepData = await SleepData.listSleepDataForUser(req.body)
    return res.status(200).json({ sleepData })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const newSleepEntry = await SleepData.createSleepEntry(req.body)
      return res.status(200).json({ newSleepEntry })
    } catch (err) {
      next(err)
    }
})

module.exports = router
