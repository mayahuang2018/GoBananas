import axios from "axios";

export default {
  // Gets all books
  getIdioms: function() {
    return axios.get("/api/idioms");
  },
  // Gets the book with the given id
  getIdiom: function(id) {
    return axios.get("/api/idioms/" + id);
  },
  // Deletes the book with the given id
  deleteIdiom: function(id) {
    return axios.delete("/api/idioms/" + id);
  },
  // Saves a book to the database
  saveIdiom: function(idiomData) {
    return axios.post("/api/idioms", idiomData);
  }
};