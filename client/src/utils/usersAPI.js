import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/findUser");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/loginUser" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/" + id);
  },
  // Saves a book to the database
  saveUser: function(usersData) {
    return axios.post("/api/signup", usersData);
  }
};