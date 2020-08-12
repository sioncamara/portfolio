import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import React from "react";

export default (props) => {

  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle();
      }}
    ></div>
  );

  return(
    <div id="main" style={props.timeout ? { display: "flex" } : { display: "none" }}>
    <article
      id="intro"
      className={`${props.article === "intro" ? "active" : ""} ${props.articleTimeout ? "timeout" : ""}`}
      style={{ display: "none" }}
    >
      <h2 className="major">Intro</h2>
      <span className="image main">
        <img src="/public/images/pic01.jpg" alt="" />
      </span>
      <p>
        Hi, I am a student at the University of Wisconsin Madison with a passion for full stack development. By the way, check out my <a href="#work">awesome work</a>.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
        porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
        Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
        aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
        vehicula.
      </p>
      {close}
    </article>

    <article
      id="work"
      className={`${props.article === "work" ? "active" : ""} ${props.articleTimeout ? "timeout" : ""}`}
      style={{ display: "none" }}
    >
      <h2 className="major">Work</h2>
      <span className="image main">
        <img src="/public/images/pic02.jpg" alt="" />
      </span>
      <p>
        Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
        erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
        lorem luctus ultrices.
      </p>
      <p>
        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
        rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
        lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
        libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.
      </p>
      {close}
    </article>

    <article
      id="about"
      className={`${props.article === "about" ? "active" : ""} ${props.articleTimeout ? "timeout" : ""}`}
      style={{ display: "none" }}
    >
      <h2 className="major">About</h2>
      <span className="image main">
        <img src="/public/images/pic03.jpg" alt="" />
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend
        sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
        Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum
        primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
      </p>
      {close}
    </article>

    <article
      id="contact"
      className={`${props.article === "contact" ? "active" : ""} ${
        props.articleTimeout ? "timeout" : ""
      }`}
      style={{ display: "none" }}
    >
      <h2 className="major">Contact</h2>
      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
      <ul className="icons">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      {close}
    </article>
  </div>
  )
};
