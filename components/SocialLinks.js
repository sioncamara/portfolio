import React from "react";
import { FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <ul className="icons" style={{ textAlign: "center" }}>
      <li>
        <a href="https://www.facebook.com/sion.boguszewicz">
          <FaFacebook />
        </a>
      </li>

      <li>
        <a href="https://github.com/sioncamara">
          <div style={{ textAlign: "center" }}>
            <FaGithub />
          </div>
        </a>
      </li>
      <li>
        <a className="icon" href="https://www.linkedin.com/in/sion-wilks/">
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  );
}
