import axios from "axios";

export default {
  // Gets all books
  getIdioms: function() {
    return axios.get("/api/Idioms");
  },
  // Gets the book with the given id
  getIdiom: function(id) {
    return axios.get("/api/Idioms/" + id);
  },
  // Deletes the book with the given id
  deleteIdiom: function(id) {
    return axios.delete("/api/Idioms/" + id);
  },
  // Saves a book to the database
  saveIdiom: function(idiomData) {
    return axios.post("/api/Idioms", idiomData);
  }
};