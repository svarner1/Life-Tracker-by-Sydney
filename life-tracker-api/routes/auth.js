// ✅ Import the createUserJwt function from the utils/tokens.js file and import the requireAuthenticatedUser middleware
//        function from the middleware/security.js file..

//  ✅ In both the login and register routes, take the user returned by the User model and pass it to the createUserJwt 
//       function to generate a token.

//  ✅  Add the token to the JSON sent back to the client, along with the user.

//    Add a GET request to the routes/auth.js file for the /me endpoint.
//       Add the requireAuthenticatedUser middleware to that route to only allow authenticated users to
//           make requests to it.
          
//       It should extract the user from res.locals, take their email, and get the user by calling the fetchUserByEmail
//          method on the User model. Make sure to pass it to the makePublicUser method before returning that user to the client.

const express = require("express")
const User = require("../models/user")
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")
const router = express.Router()

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body)
    const token = createUserJwt(user)
    return res.status(200).json({ user, token })
  } catch (err) {
    next(err)
  }
})

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body, isAdmin: false })
    const token = createUserJwt(user)
    return res.status(201).json({ user, token })
  } catch (err) {
    next(err)
  }
})

//    Add a GET request to the routes/auth.js file for the /me endpoint.
//    Add the requireAuthenticatedUser middleware to that route to only allow authenticated users to
//       make requests to it.

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  console.log("is in the route")
  try {
    const { email } = res.locals.user
    const user = await User.fetchUserByEmail(email)
    const publicUser = User.makePublicUser(user)
    return res.status(200).json({ user: publicUser })
  } catch(err) {
    next(err)
  }
}) 

module.exports = router
