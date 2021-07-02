// In the routes/activity-feed.js file, import the ActivityFeed model, create a new router, 
//   and export it
// Add a single GET request at the / endpoint that calls the displayFeed method of the 
//   ActivityFeed model and return the results of the data

const express = require("express")
const ActivityFeed = require("../models/activity-feed")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const feed = await ActivityFeed.displayFeed()
    return res.status(200).json({feed})
  } catch (err) {
    next(err)
  }
})

module.exports = router
