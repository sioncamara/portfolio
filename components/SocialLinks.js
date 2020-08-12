
import  FontAwesomeIcon  from '@fortawesome/react-fontawesome'
import {faGithub, faFacebook, faLinkedin  } from "@fortawesome/fontawesome-free-brands"
import React from "react";
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FaLinkedinIn, FaFacebook, FaGithub } from 'react-icons/fa';

config.autoAddCss = false;


export default function SocialLinks(){
  return(
    <ul className="icons">
      
        <li>
          <a href="https://www.facebook.com/sion.boguszewicz">
          <FaFacebook style={{fontSize: "90%"}}/>
  
          </a>
        </li>
        
        <li>

          <a href="https://github.com/sioncamara">
          <div style={{textAlign: "center"}}><FaGithub style={{fontSize: "190%"}, {}} /></div>
            
          </a>
        </li>
        <li>
          <a className="icon" href="https://www.linkedin.com/in/sion-wilks/" >
          <FaLinkedinIn style={{fontSize: "170%"},{} }/>
          </a>
        </li>
      </ul>
  )  
}