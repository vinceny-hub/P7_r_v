import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3300';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
// axios.defaults.headers.post[ 'Authorization'] =  'userId' + localStorage.getItem('userId')

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
    

