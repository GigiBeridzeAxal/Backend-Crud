const database = require('../models/sellmodel')


const getsells = async(req,res) => {
    const data = await database.find()
    res.json(data)

}
  
const deletesells = async(req,res) => {
    const data = await database.deleteOne(req.body)
    res.json(data)

}

const postsells = async(req,res) => {
    

    const {sellitem,price,desc , by ,userid} = req.body

    if(!sellitem || !price || !desc || !by){
       throw new Error("All Fields Are mandatory")
       console.log("All Files Are mandatory")
    }
    
    const sendadata = await database.create({
        sellitem,
        price,
        desc,
        by,
        userid: userid
    })
    if(sendadata){
        res.json("Data Succesfuly Send")
    }
}   
    


module.exports = { getsells , deletesells , postsells }