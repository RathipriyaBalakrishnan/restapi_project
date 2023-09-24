import "./footerStyle.css";
import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>37G,Crosscut - Gandhipuram.</p>
              <p>TamilNadu.</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />9047464168</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />evbookersofficial01@gmail.com</h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Company</h4>
          <p>This is owned by RATHIPRIYA BALAKRISHNAN, CEO & Founder of Ev.We provide most fantastic events and organize as your wish.</p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
