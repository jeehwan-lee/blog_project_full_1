import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching, user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      console.log(res.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton">Login</button>
      </form>
      <button
        className="loginRegisterButton"
        type="submit"
        disabled={isFetching}
      >
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
