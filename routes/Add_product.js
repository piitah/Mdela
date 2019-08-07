const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const multer = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
}).single('file')

router.post('/', async (req, res, next) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                return res.send('no file uploaded')
            }

            // file info
            const productImgName = req.body.file
            const title = req.body.title
            const category = req.body.category
            const price = req.body.price
            const des = req.body.des
            const color = req.body.color
            const size = req.body.size

            const product = new Product({
                title: title,
                category: category,
                price: price,
                des: des,
                productImg: productImgName,
                color: color,
                size: size
            })
            console.log(product)

            product.save(function (err, product) {
                if (err) {
                    res.status(500).send({
                        error: 'unable to save' + err
                    })
                } else {
                    res.send(product)
                }
            })
        })
    } catch (error) {
        res.status(500).send({
            error: `error occured saving the product ${error}`
        })
    }
})

router.get('/', async (req, res) => {
    const product = await Product.find({})
    res.send(product)
})

module.exports = router
