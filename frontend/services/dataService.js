import http from 'axios.js'

class dataService {
  getAll() {
    return http.get("/comment");
  }

  get(id) {
    return http.get(`/comments/${id}`);
  }

  create(data) {
    return http.post("/commments", data);
  }

  update(id, data) {
    return http.put(`/comments/${id}`, data);
  }

  delete(id) {
    return http.delete(`/comments/${id}`);
  }

  deleteAll() {
    return http.delete(`/comments`);
  }

  findByTitle(title) {
    return http.get(`/comments?title=${title}`);
  }
}

export default new dataService();