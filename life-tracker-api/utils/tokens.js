const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")

//const generateToken = (data) => jwt.sign(data, SECRET_KEY, { algorithm: "HS256", expiresIn: 1000})
const generateToken = (data) => jwt.sign(data, SECRET_KEY, {expiresIn: "24hr"})

// const createUserJWT = ({email, admin_status}) => {
//     const payload {
//         email,
//         admin_status
//     }
//     const token = generateToken(payload)
//     console.log("token", token)
// }

const createUserJwt = (user) => {
    const payload = {
        email: user.email,
        isAdmin: user.isAdmin || false
    }
    
    return generateToken(payload)
}

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
      } catch (err) {
        return {}
      }
}

module.exports = {
    generateToken,
    createUserJwt,
    validateToken,
}
  