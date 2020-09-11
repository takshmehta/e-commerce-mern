import React from "react";
import "../styles.css";
import ContactUs from "./ContactForm";
import { Link } from "react-router-dom";
const Footer = () => (
  <div className="footer bg-dark  py-3">
    <div className="container-fluid bg-success text-white text-center py-3 ">
      <h4>If you have got any questions feel free to reach us :)</h4>
      <Link to="user/contactus">
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </Link>

      <div>
        <span className="text-lead">
          An amazing <span className="text-white">MERN</span> website
        </span>
      </div>
    </div>
  </div>
);

export default Footer;
