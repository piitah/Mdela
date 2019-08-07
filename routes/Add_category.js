const express = require('express')
const router = express.Router()
const Category = require('../models/category')

router.post('/', (req, res) => {
    const title = req.body.title
    const content = req.body.content

    try {
        const category = new Category({
            title: title,
            content: content
        })

        category.save((err, category) => {
            if (err) {
                res.status(400).send({
                    error: `error has occured trying to save the category ${err}`
                })
            } else {
                res.send('category has been saved successfully')
            }
        })
    } catch (err) {
        res.status(500).send({
            error: `error occured saving the cat ${err}`
        })
    }
})
module.exports = router