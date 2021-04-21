const jwt = require('jsonwebtoken');


// le TOKEN et l'ID de l'utilisateur sont vérifié (match ou non)
module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1]; //second element du header authorization
//     console.log(token)
//     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');//vérification  du token
//     // console.log(decodedToken.userId)
//     const userId = decodedToken.userId;//verification de l'utilisateur
//     console.log(req.body.userId)
//     if (req.body.userId && req.body.userId !== userId) {//match ou pas
//       throw 'Invalid user ID';
//     } else {
      
//       next();
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error('Invalid request!')
      
//     });
   
    
    
//   }
// };{
	// "userId": "607202a2324d6a29f435385e"
  let userId = '607202a2324d6a29f435385e'
  let userId2 = '607202a2324d6a29f435385e'
	let token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDcyMDJhMjMyNGQ2YTI5ZjQzNTM4NWUiLCJpYXQiOjE2MTg5NDY3MjIsImV4cCI6MTYxOTAzMzEyMn0.DsVaKjCa9orsdqiXXcdkG9WU0DJMiS9isTch1mC3KOc'
  let token2 =  'DsVaKjCa9orsdqiXXcdkG9WU0DJMiS9isTch1mC3KOc'


try {
  // const token = token1.split(' ')[1]; //second element du header authorization
  // console.log(token)
  const  token = req.headers.authorization.split(' ')[1]
  console.log(token)
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');//vérification  du token
  console.log(decodedToken)
  console.log(decodedToken.userId)
  const userId = decodedToken.userId;//verification de l'utilisateur
  // console.log(userId)
  if (req.body.userId && req.body.userId !== userId){
  // if (userId && userId !== userId2) {//match ou pas
    throw 'Invalid user ID';
    // next();
  } 
  // else {
    
    next();
  // }
} catch {
  res.status(401).json({
    error: new Error('Invalid request!')
    
  });
 
  
  
}
};
