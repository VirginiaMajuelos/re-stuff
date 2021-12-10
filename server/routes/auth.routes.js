const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require("bcrypt")
const bcryptSalt = 10

//// Sign 

router.post('/signup', (req, res) => {

  const { email, username, password, bankAccount } = req.body

  User
    .findOne({ email })
    .then(user => {

      if (user) {
        res.status(400).json({ code: 400, message: 'Email already exits' })
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)

      User
        .create({ username, email, password: hashPass, bankAccount})
        .then((user) => res.status(200).json(user))
        .catch(err => console.log(err))
        //.catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err: err.message }))
    })
    .catch(err => res.status(500).json({ code: 500, message: 'BDB error while fetching user', err: err.message }))
})

////  Login

router.post('/login', (req, res) => {

  const { email, password } = req.body

  User
    .findOne({ email })
    .then(user => {

      if (!user) {
        res.status(401).json({ code: 401, message: 'Username not registered' })
        return
      }

      if (bcrypt.compareSync(password, user.password) === false) {
        res.status(401).json({ code: 401, message: 'Incorrect password' })
        return
      }

      req.session.currentUser = user
      console.log(user)
      res.json(req.session.currentUser)
    })
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})

////Logout

router.get('/logout', (req, res) => {
  console.log(req.session.currentUser)
  req.session.destroy((err) => res.status(200).json({ code: 200, message: 'Logout successful' }));
})

router.get("/isloggedin", (req, res) => {
  req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

//// Profile

router.get('/profile/:id', (req, res) => {
const { id } = req.params;

  User.findById(id)
    .then((theUser) => res.json(theUser))
    .catch((err) =>
      res.json({ err, errMessage: "Error looking profile" })
    );
});


/// Edit profile

router.put("/profile/:id", (req, res) => {
  const { id } = req.params;
  const {email, username, description, city, imageUser, productLike} = req.body;

  const query = {};

  email && (query.email = email)
  username && (query.username = username)
  description && (query.description = description)
  city && (query.city = city)
  imageUser && (query.imageUser = imageUser)
  productLike && (query.productLike = productLike)

  console.log(req.body)
  User.findByIdAndUpdate(
    id, query,
    { new: true })
    .then((updatedProfile) => res.json(updatedProfile))
    .catch((err) => res.json({ err, errMessage: "Error editing product" }));
});

module.exports = router