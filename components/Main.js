import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import React from "react";
import Article from "./Article";
import Article2 from "./Article2";
import ContactForm from "./ContactForm";

import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Main(props) {
  let close = (
    multiPaged // if multi page is true include x outside of any articles. Otherwise include on only article
  ) => (
    <div
      className={multiPaged ? "closePage" : "close"}
      onClick={() => {
        props.onCloseArticle();
      }}
    ></div>
  );

  return (
    <div id="main" style={props.timeout ? { display: "flex" } : { display: "none" }}>
      <div>
     

      <Article2 
        page={props.aboutPage}
        type="about"
        article={props.article}
        articleTimeout={props.articleTimeout}
        first={true}
        close={close(false)}
      />

      <div>
        <Article
          id="P1"
          type="projects"
          title="Project 1"
          article={props.article}
          image="/images/2.jpg"
          articleTimeout={props.articleTimeout}
          first={true}
          hasTag={true}
          tag="#P2"
          close={close(true)}
        ></Article>

        <br />
        <Article
          id="P2"
          type="projects"
          title="Project 2"
          article={props.article}
          image="/images/2.jpg"
          articleTimeout={props.articleTimeout}
          hasTag={true}
          tag="#P3"
          close={close(true)}
        />
        <br />
        <Article
          id="P3"
          type="projects"
          title="Project 3"
          article={props.article}
          image="/images/2.jpg"
          articleTimeout={props.articleTimeout}
          hasTag={true}
          tag="#P4"
          close={close(true)}
        />

        <br />

        <Article
          id="P4"
          type="projects"
          title="Project 4"
          article={props.article}
          image="/images/2.jpg"
          articleTimeout={props.articleTimeout}
          close={close(true)}
        />

        {close(true)}
      </div>

      <Article
          id="Skills"
          article={props.article}
          type="skills"
          image="/images/pic01.jpg"
          articleTimeout={props.articleTimeout}
          first={true}
          close={close(false)}
        />
      </div>

      

      <article
        id="contact"
        className={`${props.article === "contact" ? "active" : ""} ${props.articleTimeout ? "timeout" : ""}`}
        style={{ display: "none" }}
      >
        <ContactForm />
        
        {close(false)}
      </article>
    </div>
  );
}
