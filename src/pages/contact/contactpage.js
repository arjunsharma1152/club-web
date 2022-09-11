import React from "react";
import "../../pages/contact/contact.scss";

const ContactPage = () => (
  <div className="contact">
    <div>
      <h1 className="cheading">Contact Us</h1>
      <p className="contact-content">
        <p>club.csitmjpru@gmail.com</p>
        <p> +91-8534833926 </p>
        <p className="dark-name">Harshit Kumar Singh </p>
        <p>(Student Incharge) </p>
        <p>Department Of CSIT</p>
        <p>M.J.P.R.U , Bareilly</p>
        <p> Uttar Pradesh Pincode:-243006</p>
      </p>
    </div>
    <div className="developers">
      <p className="dev-name">
        <span className="dark-name">Creators</span> :{" "}
        <a
          className="links"
          href="https://github.com/Himanshusaini12"
          target="_blank"
          rel="noreferrer"
        >
          Himanshu
        </a>{" "}
        <span className="dark-name">&</span>{" "}
        <a
          className="links"
          href="https://github.com/arjunsharma1152"
          target="_blank"
          rel="noreferrer"
        >
          Arjun
        </a>
      </p>
    </div>
  </div>
);

export default ContactPage;
