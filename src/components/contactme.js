import React from "react";
import "./ContactStyles.css";

function Contact() {
  const linkedin = "Miguel Jose Magsaysay";
  const github = "Miguel Magsaysay";
  const contactNumber = "+63 916 306 0307";

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Information</h1>
      <ul className="contact-list">
        <li className="contact-item">
          <strong>LinkedIn:</strong> {linkedin}
        </li>
        <li className="contact-item">
          <strong>GitHub:</strong> {github}
        </li>
        <li className="contact-item">
          <span class="material-symbols-outlined"></span>
          <strong>Contact Number:</strong> {contactNumber}
        </li>
      </ul>
    </div>
  );
}

export default Contact;

