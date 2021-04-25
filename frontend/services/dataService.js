import axios from 'axios'


// import http from "../src/axios";

// class DataService {
//   getAll() {
//     return http.get("/comment");
//   }

//   get(id) {
//     return http.get(`/comments/${id}`);
//   }

//   create(data) {
//     return http.post("/comments", data);
//   }

//   update(id, data) {
//     return http.put(`/comments/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/comments/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/comments`);
//   }

//   findByTitle(title) {
//     return http.get(`/coments?title=${title}`);
//   }
// }

// export default DataService();

    

// const url = 'http://localhost:3300/api/comment/'

class dataService {
  getAll() {
    return new Promise ( (resolve, reject)=>{
      try{
        const res =  axios.get(url)
        const data = res.data
        resolve(
          data.map(article =>({
            ...article,
            createdAt: new Date(article.createdAt)
          }))
        )
      }catch(err){
        reject(err)
      }
    } )
  }
 
  // get(id) {
  //   return get(`/comments/${id}`);
  // }

  static createComment(article) {
    return axios.article(baseURL, {
      article
    })
  }

  // update(id, data) {
  //   return put(`/comments/${id}`, data);
  // }

  static deleteComment(id) {
    return axios.delete(`${baseURL}${id}`)
   
  }

  // deleteAll() {
  //   return delete(`/comments`);
  // }

//   findByTitle(title) {
//     return get(`/comments?title=${title}`);
//   }
}

export default dataService();