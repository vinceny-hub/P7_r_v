import axios from 'axios'

// const url = 'http://localhost:3300/api/comment/'

class DataService {
//   static getAll() {
//     return new Promise ((resolve, reject)=>{
//       try{
//         const res = axios.get(url)
//         const data = res.data
//         resolve(
//           data.map(article =>({
//             ...article,
//             createdAt: new Date(article.createdAt)
//           }))
//         )
//       }catch(err){
//         reject(err)
//       }
//     } )
//   }
 
  // get(id) {
  //   return get(`/comments/${id}`);
  // }

//   static createComment(article) {
//     return axios.article(url, {
//       article
//     })
//   }

  // update(id, data) {
  //   return put(`/comments/${id}`, data);
  // }

  static deleteComment(_id) {
    return axios.delete(`http://localhost:3300/api/comment/${_id}`)
   
  }

  // deleteAll() {
  //   return delete(`/comments`);
  // }

//   findByTitle(title) {
//     return get(`/comments?title=${title}`);
//   }
}

export default DataService();