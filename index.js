require('dotenv').config()
const express = require('express')
const ConnectDb = require('./config/connectDb')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3500
app.use(cors({
    origin: '*'
}))
app.use(express.json())


ConnectDb()
app.use('/' , require('./routes/root'))


app.listen(PORT , console.log(`Server Running On ${PORT}`))
