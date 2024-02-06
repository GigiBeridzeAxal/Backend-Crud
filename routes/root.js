const express = require('express')
const { getsells, deletesells,  postsells } = require('../controllers/sellscontroller')
const ConnectDb = require('../config/connectDb')
const router = express.Router()



router.get('/', getsells)
router.post('/', postsells)
router.delete('/', deletesells)


module.exports = router