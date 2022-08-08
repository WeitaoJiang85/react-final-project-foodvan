import React from "react";
import Cooking from "../assets/Cooking.jpg";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div
        className="rightSide"
        style={{ backgroundImage: `url(${Cooking})` }}
      ></div>
      <div className="leftSide">
        <form id="contact-form">
          <h1> Contact Us</h1>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Leave a message..."
            name="message"
            required
          ></textarea>

          <Link to="/thanks">
            <button type="button">Send Message</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;
