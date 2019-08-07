const express = require('express')
const router = express.Router();

// get all index

router.get('/', (req, res) => {
    res.send('index')
})
module.exports = router