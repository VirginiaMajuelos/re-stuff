const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique:true,
      required  : [ true, 'The email is required' ], 
    },
    
    username:{
      type: String,
      unique:true,
      required  : [ true, 'The username is required' ], 
      maxlength : 12,
    },
    
    password: {
      type: String,
      required  : [ true, 'The password is required' ], 
    },
    
    description: {
      type: String,
      maxlength : 200,
    },
    
    role: {
      type: String,
      enum: ['USER', 'GUEST', 'ADMIN'],
      default: 'USER',
      required: true,
    },
    
    bankAccount: Number,
    
    city:{
      type: String,
      unique:true,
    },
    
    imageUser: {
      type: String,
      default: '/images/person-icon-default.png'
    },

    productLike:[ {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }]
    
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;