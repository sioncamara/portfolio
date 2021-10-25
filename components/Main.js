import React, { useState } from "react";
import Article2 from "./Article2";
import Project from "./Project";
import ContactForm from "./ContactForm";

import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Main(props) {

  // if multi page is true include x outside of any articles. Otherwise include on only article
  let close = (
    multiPaged 
  ) => {
    console.log(multiPaged);
    return (
      <div
        className={multiPaged ? "closePage" : "close"}
        onClick={() => {
          props.onCloseArticle();
        }}
      >
        {" "}
      </div>
    );
  };

  let backHome = () => (
    <div
      className={"closePage"}
      onClick={() => {
        props.onCloseArticle();
      }}
    >
      <a> &larr; Back to home</a>{" "}
    </div>
  );

  const [isFirst, setFirst] = useState(true);

  return (
    <div id="main" style={props.timeout ? { display: "flex" } : { display: "none" }}>
      <div>
        <Article2
          page={props.aboutPage}
          page2={props.aboutPage.node}
          type="about"
          article={props.article}
          articleTimeout={props.articleTimeout}
          close={close(false)}
          first={true}
         
        />

        <div>
          {/*close(true)*/}
          <br />
          <br />
          {props.projects?.map(({ node }) => {
            console.log("Checing if priority is working:", node.priority)
            return (
              <>
                <Project
                  key={node.priority}
                  page={node}
                  type="projects"
                  article={props.article}
                  articleTimeout={props.articleTimeout}
                  first={node.isfirst}
                  close={close(true)}
                />

                <br />
                
              </>
            );
          })}
          

        </div>

        <Article2
          page={props.skillsPage}
          type="skills"
          article={props.article}
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
