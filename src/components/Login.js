import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

export default function Login({ setToken }) {
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("");

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = database.find((user) => user.username === username);

    if (userData) {
      if (userData.password !== password) {
        setError("You have entered the wrong password");
        setTimeout(() => {
          setError("");
        }, 2000);
      } else if (userData.password === password) {
        setTimeout(() => {
          navigate("/overview");
        }, 4000);
        setShowLoader(true);
      }
    } else {
      setError("User not found!");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <div className="login-wrapper">
      {!showLoader && (
        <div className="form-group">
          <h2>Please Log In</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <p>
                  <strong>Username</strong>
                </p>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Please enter the username"
                  required
                />
                <br />
                {username && <strong>You have entered : {username}</strong>}
              </label>
              <br />
              <label>
                <p>
                  <strong>Password</strong>
                </p>

                <input
                  type="password"
                  className="form-control form-control-lg"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Please enter the password"
                  required
                />
              </label>
              <br />
              <br />

              <Button type="submit" variant="success">
                Submit
              </Button>
              <br />
              <br/>
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
            </div>
          </form>
        </div>
      )}
      {showLoader && (
        <div style={{ display: "inline-block" }}>
          <h3>Please wait...</h3>
          <Bars color="#00BFFF" height={300} width={300} wrapperClass />
        </div>
      )}
    </div>
  );
}
