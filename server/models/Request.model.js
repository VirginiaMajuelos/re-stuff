const { Schema, model } = require("mongoose");

const requestSchema = new Schema(
  {
    inicialDate: {
        type:Date,
        required:true
    },

    finalDate: {
        type:Date,
        required:true
    },

    comments: String,

    requestOwner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
    isAccept:{
        type: String,
        enum: ['ACCEPTED','PENDING', 'DENY'],
        required: true,
        default:'PENDING',
      },

    idProduct:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    
  },

  {
    timestamps: true,
  }
);

const Request = model("Request", requestSchema);
module.exports = Request;
