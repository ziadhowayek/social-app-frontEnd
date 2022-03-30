import axios from "axios";

const User_Base_Api_Url = "http://localhost:8080/api/v1/user/";
class UserService {
  getUsers() {
    return axios.get(User_Base_Api_Url);
  }
  getUserByUsername(username) {
    return axios.get(User_Base_Api_Url + username);
  }
  validateLogin(username, password) {
    return axios.get(
      User_Base_Api_Url + "user=" + username + "/password=" + password
    );
  }
  getIdByUsername(username) {
    return axios.get(User_Base_Api_Url + "getId/" + username);
  }

  getUserById(id) {
    return axios.get(User_Base_Api_Url + "getUser/" + id);
  }
  postUserPhoto(e) {
    return axios.post(User_Base_Api_Url + "postPhoto/", e);
  }
}

export default new UserService();
