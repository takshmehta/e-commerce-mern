import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("error in signup"));
  };

  const successMessage = () => {
    return (
      <div className="container ">
        <div className="row  ">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-success"
              style={{ display: success ? "" : "none" }}
            >
              New account created successfully.{" "}
              <Link to="/signin"> Login Here </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="container ">
        <div className="row  ">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="container ">
        <div className="row  ownclass">
          <div className="col-md-6 offset-sm-3 text-left">
            <form action="">
              <div className="form-group">
                <label htmlFor="" className="text-light">
                  Name
                </label>
                <input
                  onChange={handleChange("name")}
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-light">
                  Email
                </label>
                <input
                  onChange={handleChange("email")}
                  className="form-control"
                  type="email"
                  name=""
                  id=""
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-light">
                  Password
                </label>
                <input
                  onChange={handleChange("password")}
                  className="form-control"
                  type="password"
                  name=""
                  id=""
                  value={password}
                />
              </div>
              <button onClick={onSubmit} className="btn btn-success btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signup page" description="A simple signup page for user !">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
