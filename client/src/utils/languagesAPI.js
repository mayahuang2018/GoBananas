import axios from "axios";

export default {
  // Gets all books
  getLanguagesAll: function() {
    return axios.get("/api/languages");
  },
  // Gets the book with the given id
  getLanguages: function(id) {
    return axios.get("/api/languages/" + id);
  },
  // Deletes the book with the given id
  deleteLanguages: function(id) {
    return axios.delete("/api/languages/" + id);
  },
  // Saves a book to the database
  saveLanguages: function(languagesData) {
    return axios.post("/api/languages", languagesData);
  }
};