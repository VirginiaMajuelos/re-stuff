const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const { capitalizeText, checkMongoID, isClient, isWorker } = require("../utils");


const Product = require("../models/Product.model")
const User = require("../models/User.model")
const Review = require("../models/Review.model")

// LISTA DE REVIEWS

router.get('/', (req, res) => {

    Review.find()
        .then(allReviews => res.render('/reviews', {allReviews}))
        .catch(err => console.log(err))
})

// CREACION DE LA REVIEW

router.get("/new-review", (req, res) => {

    Review.find()
        .then(allReviews => res.render("reviews/review-new", { allReviews }))
        .catch(err => console.log(err))
})

router.post("/new-review", (req, res) => {

    const { rating, description, idProduct } = req.body

    const { id } = req.query

    // Product.find(id)
    //     .then(idProduct => {
    //         Review.create({ rating, description, idProduct })
                
    //             .then(newReview => res.redirect("/reviews", {idProduct, newReview}))
    //             .catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))

})




// DELETE REVIEW 

router.get("/delete", (req, res) => {
    const { id } = req.query

    Review.findByIdAndDelete(id)
        .then(info => res.redirect("/reviews"))
        .catch(err => console.log(err))

})






module.exports = router;