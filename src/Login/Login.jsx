import React, { useState } from "react";
import { useFormik } from "formik";
import "./Login.css";
import HttpRequest from '../common/HttpRequest'

function Login({onLoginSuccssesfull}) {
  const [error, setError] = useState(false);
  const [lock, setLock] = useState(false);

  const loginFormik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      setError(false);

      if(lock) return;

      setLock(true);
  
      HttpRequest.post(values)
      .then(onLoginSuccssesfull)
      .then(() => setError(true))
      .finally(() => setLock(false));
    },
  });

  return (
    <div className="Login--wrap">
      <div className="Login--wrap__form">
        <form onSubmit={loginFormik.handleSubmit}>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.userName}
          />
          <br />
          <label htmlFor="lastName">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.password}
          />
          <br />
          <button disabled={lock} type="submit">
            Submit
          </button>
        </form>
        {error && (
          <p className="Login--error">I dont know you, check yours data</p>
        )}
      </div>
    </div>
  );
}

export default Login;
