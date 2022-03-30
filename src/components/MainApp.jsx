import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../services/UserService";

function MainApp() {
  const { id } = useParams();
  const [user, changeUser] = useState({});
  const [photoData, changePhoto] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    UserService.getUserById(id)
      .then((response) => {
        changeUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  document.body.style.backgroundColor = "white";
  return (
    <div>
      mainApp {user.username}
      <input
        type="file"
        name="photo"
        id="photo"
        onChange={(e) => changePhoto(e.target.files[0])}
      />
      <button onClick={() => sendImage()}>Submit</button>
    </div>
  );
  function sendImage() {
    console.log(photoData);
    UserService.postUserPhoto(photoData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
}

export default MainApp;
