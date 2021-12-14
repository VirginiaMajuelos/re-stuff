const router = require("express").Router();
// const Product = require("../models/Product.model")
// const User = require("../models/User.model")
const Review = require("../models/Review.model")


router.get('/all-reviews', (req, res) => {

    Review.find()
        .populate("reviewOwner")
        .then(allReviews => res.json (allReviews))
        .catch(err => console.log(err))
})

router.post("/create-reviews", (req, res) => {
    let { description } = req.body
    const { id } = req.query;
    
    Review.create({  description, idProduct: id, reviewOwner: req.session.currentUser._id })
        .then(newReview => res.status(200).json(newReview))
        .catch(err => res.status(500).json(err))

})

module.exports = router;