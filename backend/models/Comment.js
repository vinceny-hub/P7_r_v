const mongoose = require('mongoose')

// schéma de données du formulaire sauce
const commentSchema = mongoose.Schema({
  
  article: {type: String, required: true},
  // name: { type: String, required: false, unique: true},
  // manufacturer: { type: String, required: false },
  // description: { type: String, required: false },
  // imageUrl: { type: String, required: false },
  // mainPepper: { type: String, required: false },
  // heat: { type: Number, required: false },
  // userId: { type: String, required: false },
  // likes: { type: Number },
  // dislikes: { type: Number },
  // usersLiked: { type: [String] },
  // usersDisliked: { type:[String] }
  
   
  })

  // commentschema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

module.exports = mongoose.model('Comment', commentSchema);


