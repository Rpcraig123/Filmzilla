const Users = require('../models')
// const Review = require('../models/review')

const GetProfiles = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

// const GetUserProfile = async (req, res) => {
//   try {
//     const userAndReviews = await Users.findByPk(req.params.user_id)
//     res.send(userAndReviews)
//   } catch (error) {
//     throw error
//   }
// }

// const GetUserProfile = async (req, res) => {
//   try {
//     let profile = req.params.id
//     const result = await Users.findOne({
//       where: {
//         id: profile
//       }
//     })
//     res.send(result)
//   } catch (error) {
//     throw error
//   }
// }
// const CreateUser = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body)
//     res.send(newUser)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetProfiles
  // GetUserProfile
  //   CreateUser
}
