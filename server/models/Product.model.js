const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    imageURL: String,
    
    name:{
        type: String,
        required  : [ true, 'The name of the product is required' ], 
        maxlength : 12,
      },
   
    price:{
        type: Number,
        required: true,
      },

    description:{
        type: String,
        required  : [ true, 'Please write a description' ], 
        maxlength : 300,
      },
      
    status:{
        type: String,
        enum: ['RENTED', 'AVAILABLE'],
        required: true,
        default:'AVAILABLE',
      },
      //DUDAS 1: Como podemos hacer esto funcionar, para que cuando se haya aceptado la solicitud aparezca pero con un mensaje de no available en el momento 
      
    categorie: {
        type: String,
        enum: ['TECNOLOGIE', 'SPORTS', 'FURNITURE', 'GAMES', 'CULTURE' ],
        required: true,
      },
      
    cityProduct:{
        type: String,
        required  : [ true, 'The name of the product is required' ], 
      },
      
    postCode:{
        type:Number,
        required: true,
      },
      
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
  },

  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);
module.exports = Product;