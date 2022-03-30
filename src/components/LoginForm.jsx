import React from "react";
import { useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [user, changeUser] = useState({ name: "", password: "" });
  const [fail, changeFail] = useState("");
  let navigate = useNavigate();
  return (
    <div className="container formdiv col-xl-4 col-l-5 col-m-5 col-s-6 col-7 ">
      <div id="loginDiv" className=" col-10 mx-auto text-center">
        <h1 className="text-center">Social App</h1>
        <p className="wrongLogin">
          <b>{fail}</b>
        </p>
        <form>
          <div className="row mt-4 mx-auto">
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="Username"
              onChange={(e) => changeUser({ ...user, name: e.target.value })}
              value={user.name}
            />
          </div>
          <div className="row mt-2 mx-auto">
            <input
              type="password"
              className="form-control mt-2"
              id="inputPassword"
              placeholder="Password"
              onChange={(e) =>
                changeUser({ ...user, password: e.target.value })
              }
              value={user.password}
            />
          </div>
        </form>
        <button
          value="Sign In"
          className="btn btn-primary col-m-l-xl-5 col-s-6 col-6 mt-3 "
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
  function handleSubmit(event) {
    UserService.validateLogin(user.name, user.password)
      .then((response) => {
        if (!response.data) return changeFail("wrong username or password");
        UserService.getIdByUsername(user.name)
          .then((response) => {
            navigate("app/id=" + response.data + "/password=" + user.password);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
