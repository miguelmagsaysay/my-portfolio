import React from "react";
import "./ContactStyles.css";

function Contact() {
  const linkedin = "Miguel Jose Magsaysay";
  const github = "@miguelmagsaysay";
  const contactNumber = "+63 916 306 0307";

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Information</h1>
      <ul className="contact-list">
        <li className="contact-item">
          <i className="material-icons material-icon">account_circle</i>
          <strong>LinkedIn:</strong> {linkedin}
        </li>
        <li className="contact-item">
          <i className="material-icons material-icon">code</i>
          <strong>GitHub:</strong> {github}
        </li>
        <li className="contact-item">
          <i className="material-icons material-icon">phone</i>
          <strong>Contact Number:</strong> {contactNumber}
        </li>
      </ul>
    </div>
  );
}

export default Contact;
