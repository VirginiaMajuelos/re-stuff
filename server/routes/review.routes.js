const router = require("express").Router();
// const Product = require("../models/Product.model")
// const User = require("../models/User.model")
const Review = require("../models/Review.model")


router.get('/all-reviews', (req, res) => {

    Review.find()
        .populate("reviewOwner")
        .then(allReviews => res.render('/reviews', {allReviews}))
        .catch(err => console.log(err))
})

router.post("/create-reviews", (req, res) => {
    let { description } = req.body
    const { id } = req.query;
    // rating || (rating = 4)

    Review.create({  description, idProduct: id })
        .then(newReview => res.status(200).json(newReview))
        .catch(err => res.status(500).json(err))

})


router.get("/delete", (req, res) => {
    const { id } = req.query

    Review.findByIdAndDelete(id)
        .then(info => res.redirect("/reviews"))
        .catch(err => console.log(err))

})






module.exports = router;