const express = require('express')
const router = express.Router()
// const register = require('../models/register')

router.post('/', (req, res, next) => {
    res.send('page')
})
module.exports = router
