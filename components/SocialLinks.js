import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from "react";

export default function SocialLinks(){
  return(
    <ul className="icons">
      
        <li>
          <a href="https://www.facebook.com/sion.boguszewicz">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>

        <li>
          <a href="https://github.com/sioncamara">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sion-wilks/">
          <TwitterIcon></TwitterIcon>
          </a>
        </li>
      </ul>
  )  
}