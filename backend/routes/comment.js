//routes sauces 

//router express
const express = require('express')
const router = express.Router()

//import depuis controllers/sauces
const commentCtrl = require('../controllers/comment')

//import depuis les middlewares auth et multer-config
const auth = require('../middleware/auth')//authentification JsonWebToken
const multer = require('../middleware/multer-config')//gestion des images

router.get('/', auth, commentCtrl.getAllComments) //router.get('/', auth, commentCtrl.getAllComments)

router.post('/', auth, multer, commentCtrl.createComment)

router.get('/:id', auth, commentCtrl.getOneComment)

router.put('/:id', auth, commentCtrl.modifyComment)

router.delete('/:id', auth, commentCtrl.deleteComment)

router.post('/:id/like', auth, commentCtrl.likeComment);

module.exports = router

