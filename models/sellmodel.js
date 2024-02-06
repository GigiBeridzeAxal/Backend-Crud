const mongoose = require('mongoose')


const SellSchema = mongoose.Schema({
 
      sellitem:{
        type: String,
        required: true
      },
      price:{
        type: String,
        required: true
      },
      desc:{
        type: String,
        required: true
      },
      by:{
        type: String,
        required:true
      },
      userid:{
        type: String,
        required:true
      }




   


})
module.exports = mongoose.model("Items" , SellSchema)