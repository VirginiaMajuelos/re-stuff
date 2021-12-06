const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    rating: {
        type:Number,
        max: 5,
        min: 0,
        required:true,
    },

    description: String,

    reviewOwner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    imageUrl:String,

    idProduct:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
  },

  {
    timestamps: true,
  }
);

const Review = model("Review", reviewSchema);
module.exports = Review;
