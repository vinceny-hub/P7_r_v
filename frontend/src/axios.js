import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3300';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
// axios.defaults.headers.post[ 'Authorization'] =  'userId' + localStorage.getItem('userId')

// export default axios.create({
//     baseURL: "http://localhost:3300/api",
//     headers: {
//       "Content-type": "application/json"
//     }
//   });
// export default() => {
 
//     let token = localStorage.getItem('token')
//     if (!token) {
//         token = localStorage.setItem('token','')
//     }
//     return axios.create({
//         baseURL : 'http://localhost:3300',
//         headers: {
//             'Authorization': 'Bearer ' + token,
//             'Content-type': 'application/json'
//         }
//     }
//     )
//     }

// import http from "../http-common";

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

    

