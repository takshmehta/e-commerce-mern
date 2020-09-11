import React, { Profiler } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();
  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link text-dark" to="/admin/create/category">
              Create Categories
            </Link>
          </li>
          {/* <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-dark">
              Manage Categories
            </Link>
          </li> */}
          <li className="list-group-item">
            <Link className="nav-link text-dark" to="/admin/create/product">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link text-dark" to="/admin/create/orders">
              Manage Order
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link text-dark" to="/admin/products">
              Manage Product
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Email:</span> {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Role:</span> {role}
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to Amin panel."
      description="Manage alll your products here. Wait for 10-15 seconds after opening a page for website to load everything from database :)"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
