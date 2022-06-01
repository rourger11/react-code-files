import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  useEffect(() => {
    let signIn = localStorage.getItem("user");
    if (signIn) {
      Navigate("/Basicinfo");
    }
  }, []);
  const Navigate = useNavigate();

  const initialValue = { email: "", password: "", confirmPassword: "" };
  const [user, setUser] = useState(initialValue);
  const [usererror, setUsererror] = useState({});
  const [submitted, setsubmitted] = useState(false);

  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    setUsererror(validation(user));

    setsubmitted(true);
    // localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("confirmpassword", JSON.stringify(user.confirmPassword));
  };

  useEffect(() => {
    if (Object.keys(usererror).length == 0 && submitted) {
      alert("Signed Up Successfully");
      const getAnswer = async () => {
        await axios.post("http://localhost:3003/user", user);
        localStorage.setItem("user", JSON.stringify(user));
        // Navigate("/Basicinfo");
      };
      getAnswer();
    }
  }, [usererror]);

  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pregex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!values.email) {
      errors.email = "* email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*valid email";
    }

    if (!values.password) {
      errors.password = "*password is required";
    } else if (!pregex.test(values.password)) {
      errors.password ="should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
    } else if (values.confirmPassword !== values.password)
      errors.confirmPassword = "*password doesn't match";

    return errors;
  };

  return (
    <div className="login_page">
      <form onSubmit={submitData}>
        <h1>Sign Up</h1>
        <div className="details">
          <h4>*E-mail Id:</h4>
          <input
            type="text"
            placeholder="Enter your email-id"
            className="box"
            name="email"
            value={user.email}
            onChange={newInput}
          />
          <br />
          <p>{usererror.email}</p>

          <h4>*Password:</h4>
          <input
            type="password"
            placeholder="Enter your password"
            className="box"
            name="password"
            value={user.password}
            onChange={newInput}
          />
          <br />
          <p>{usererror.password}</p>

          <h4>*confirm Password:</h4>
          <input
            type="password"
            placeholder="Re-enter your password"
            className="box"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={newInput}
          />
          <br />
          <p>{usererror.confirmPassword}</p>

          <div className="send">
            <button type="submit" id="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
