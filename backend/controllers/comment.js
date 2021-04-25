const Comment = require('../models/Comment')
const fs = require('fs')//module 'file system' de Node permettant le téléchargement et la modofocation des images
const { mongo } = require('mongoose')

//création d'un comment
exports.createComment = (req, res, next) => {
    const article = req.body.article
    // delete article._id
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

// exports.createComment = (req, res, next) => {
//   const commentObject = JSON.parse(req.body.article)
//   delete commentObject._id
//   const comment = new Comment({
//       ...commentObject,
//       //répertoire images
//       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
//        //initialisation des likes
//       likes: 0,
//       dislikes: 0,
//       usersLiked: [],
//       usersDisliked:[] 
//   })
//   commnent.save()
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
exports.deleteComment = (req, res) => {
        // Comment.findOne({ _id: req.params.id })
        // {_id: req.params.id}

        // Comment.delete(function (req, res) {
          // Comment.findByIdAndRemove({_id: req.params.id}, function(err){
          //     if(err) res.json(err);
          //     else res.json('Successfully removed');
          // });
      // });
      

    // console.log(req.params.id)
    //  .then(comment => {
    //     const filename = comment.imageUrl.split('/images/')[1]
    //     fs.unlink(`images/${filename}`, () => {
  //         Comment.deleteOne({ _id: req.params.id })
  //           .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
  //           .catch(error => res.status(407).json({ error }))
  //     //   })
  //     // })
  //     .catch(error => res.status(507).json({ error }))
  // }
  // .then(comment => {
            // Comment.deleteOne({ _id: req.params.id })

  // Comment.deleteOne({ _id: req.params.id })
  // res.status(200).send()
  
  Comment.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err) res.json(err);
    else res.json('Successfully removed');
});


}

//  )}
//trouver un commentaire
exports.getOneComment = (req, res, next) => {
    // let _id = '60800eff585c4d250874bcb0'
    // Comment.findOne({_id})
    Comment.findOne({id: req.body._id})
    // Comment.findOne(req.body.article)
    .then(comment => res.status(201).json(comment))
    
    .catch(error => res.status(405).json({error}))
}

// exports.getOneComment = (req, res) => {
//   const _id = req.params._id;

//   Comment.findOne(_id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Tutorial with id " + _id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Tutorial with id=" + _id });
//     });
// };
//toutes les commentaires
exports.getAllComments = (req, res, next) => {
  //  if(req.query.id){
  //  const id = req.query.id
  //  Comment.findOne(id)
  //  .then(data =>{
  //    if(!data){
  //      res.status(404).send({message})
  //    }else{
  //      res.send(data)
  //    }
  //  })
  //  .catch(err=>{
  //    res.status(500).send({message})
  //  })
  // }else{

    Comment.find()
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(404).json({error}))
}
// }

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

