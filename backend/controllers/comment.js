const Comment = require('../models/Comment')
const fs = require('fs')//module 'file system' de Node permettant le téléchargement et la modofocation des images

//création d'un comment
exports.createComment = (req, res, next) => {
    // const commentObject = JSON.parse(req.body.comment)
    // delete commentObject._id
    const comment = new Comment({
      article: req.body.article
        // ...commentObject,
        //répertoire images
        // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
         //initialisation des likes
        // likes: 0,
        // dislikes: 0,
        // usersLiked: [],
        // usersDisliked:[] 
    })
    comment.save()
    .then(() => res.status(201).json({message: 'commentaire enregistré !'}))
    .catch(error => res.status(400).json({error}))
}

// exports.createSauce = (req, res, next) => {
//   const sauceObject = JSON.parse(req.body.sauce)
//   delete sauceObject._id
//   const sauce = new Sauce({
//       ...sauceObject,
//       //répertoire images
//       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
//        //initialisation des likes
//       likes: 0,
//       dislikes: 0,
//       usersLiked: [],
//       usersDisliked:[] 
//   })
//   sauce.save()
//   .then(() => res.status(201).json({message: 'sauce enregistrée !'}))
//   .catch(error => res.status(400).json({error}))
// }




//modification des commntaires
exports.modifyComment = (req, res, next) => {
    const commentObject = req.file ?
    {
      ...JSON.parse(req.body.comment),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }: {...req.body}
    Commment.updateOne({_id: req.params.id}, {...commentObject, _id: req.params.id})
    .then(comment => res.status(200).json({message:'commentaire modifié !'}))
    .catch(error => res.status(400).json({ error }))
}
//suppression d'un commentaire
exports.deleteComment = (req, res, next) => {
    Comment.findOne({ _id: req.params.id })
      .then(comment => {
        const filename = comment.imageUrl.split('/images/')[1]
        fs.unlink(`images/${filename}`, () => {
          Comment.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
            .catch(error => res.status(400).json({ error }))
        })
      })
      .catch(error => res.status(500).json({ error }))
  }
//trouver un commentaire
exports.getOneComment = (req, res, next) => {
    Comment.findOne({_id: req.params.id})
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(404).json({error}))
}
//toutes les commentaires
exports.getAllComments = (req, res, next) => {
    Comment.find()
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(404).json({error}))
}

// *********Likes ********

exports.likeComment = (req, res, next) => {
  let like = req.body.like
  let userId = req.body.userId
  let objectId = req.params.id
  if (like === 1) { 
    Comment.updateOne({
        _id: objectId }, 
      {
        $push: {
          usersLiked: userId },
        $inc: {
          likes: +1 },
      })
      .then(() => res.status(200).json({ message: 'I like it !' }))
      .catch((error) => res.status(400).json({ error }))
  }
  if (like === -1) {
    Comment.updateOne(
        {_id: objectId }, 
          {$push: {
            usersDisliked: userId },
          $inc: {
            dislikes: +1 }, 
        }
      )
      .then(() => {
        res.status(200).json({ message: 'I don\'t like it !' })
      })
      .catch((error) => res.status(400).json({
        error
      }))
  }if (like === 0) { 
    Comment.findOne({
        _id: objectId
      })
      .then((comment) => {
        if (comment.usersLiked.includes(userId)) { 
          Comment.updateOne({
              _id: objectId }, 
              {$pull: {
                usersLiked: userId },
              $inc: {
                likes: -1 }, 
            })
            .then(() => res.status(200).json({ message: 'Unliked !' }))
            .catch((error) => res.status(400).json({ error }))
        }if (comment.usersDisliked.includes(userId)) {
          Comment.updateOne({
              _id: objectId }, 
              {$pull: {
                usersDisliked: userId },
              $inc: {
                dislikes: -1 },
            })
            .then(() => res.status(200).json({ message: 'UndisLiked !' }))
            .catch((error) => res.status(400).json({ error }))
        }
      })
      .catch((error) => res.status(404).json({ error }))
  }
}

