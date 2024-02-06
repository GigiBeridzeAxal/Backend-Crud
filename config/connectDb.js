const mongoose = require('mongoose')

const ConnectDb = async() => {
   try{
     const con = await mongoose.connect(process.env.DB)
      if(con)
      console.log("Connected Database")
     console.log(con.Connection.host, con.connection.name
      )

   }catch(err){
    console.log(err)
    console.log("Database cant Connect")  

   }
  

}
module.exports = ConnectDb