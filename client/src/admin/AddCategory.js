import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createCategory } from "./helper/adminapicall";
const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm mb-3 btn-info" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Catgeory created successfully.</h4>;
    }
  };

  const errorMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to create category.</h4>;
    }
  };

  const myCategoryForm = () => (
    <form action="">
      <div className="form-group">
        <p className="lead font-weight-bold">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For ex: Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info ">
          Create category
        </button>
      </div>
    </form>
  );

  return (
    <div>
      <Base
        title="Create a category"
        description="Add a new category for new tshirt"
        className="container bg-info p-4"
      >
        <div className="row bg-white rounded">
          <div className="col-md-8 offset-md-2">
            {successMessage()}
            {errorMessage()}
            {myCategoryForm()}
            {goBack()}
          </div>
        </div>
      </Base>
    </div>
  );
};

export default AddCategory;
