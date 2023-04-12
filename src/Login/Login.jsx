import React, { useState } from "react";
import { useFormik } from "formik";
import { credentions } from "./../mock-data/helper";
import "./Login.css";

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

      setTimeout(() => {
        if (
          credentions.login === values.userName &&
          credentions.password === values.password
        ) {
          onLoginSuccssesfull();
        } else {
          setError(true);
        }
        setLock(false);
      }, 1000);
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
