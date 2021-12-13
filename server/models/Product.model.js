const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    imageUrl: String,
    
    name:{
        type: String,
        required  : [ true, 'The name of the product is required' ],
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
      
    categorie: {
        type: String,
        enum: ['TECNOLOGIE', 'SPORTS', 'FURNITURE', 'GAMES', 'CULTURE', 'HOME' ],
        required: true,
      },
      
    cityProduct:{
        type: String,
        enum: ['ÁLAVA', 'ALBACETE', 'ALICANTE', 'ALMERÍA', 'ASTURIAS', 'ÁVILA', 'BADAJOZ', 'BARCELONA', 'BURGOS', 'CÁCERES', 'CÁDIZ', 'CANTABRIA', 'CASTELLÓN', 'CIUDAD REAL', 'CÓRDOBA', 'LA CORUÑA', 'CUENCA', 'GERONA', 'GRANADA', 'GUADALAJARA', 'GUIPÚZCOA', 'HUELVA', 'HUESCA', 'BALEARES', 'JAÉN', 'LEÓN', 'LÉRIDA', 'LUGO', 'MADRID', 'MÁLAGA', 'MURCIA', 'NAVARRA', 'ORENSE', 'PALENCIA', 'LAS PALMAS', 'PONTEVEDRA', 'LA RIOJA', 'SALAMANCA', 'SEGOVIA', 'SEVILLA', 'SORIA', 'TARRAGONA', 'SANTA CRUZ DE TENERIFE', 'TERUEL', 'TOLEDO', 'VALENCIA', 'VALLADOLID', 'VIZCAYA', 'ZAMORA', 'ZARAGOZA'],
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
