import axios from "axios";

export default {
  // get particular users for login
  getUsers: function(username, password) {
    console.log(username);
    return axios.post("/api/login", {username: username, password: password});// + username);
  },
  // all users for jwt
  getUser: function(id) {
    return axios.get("/api/findUser/");
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/" + id);
  },
  // Saves a user to the database
  saveUser: function(usersData) {
    console.log(usersData)
    return axios.post("/api/signup", usersData);
  }
};