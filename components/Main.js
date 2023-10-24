import React, { useState } from "react";
import Article from "./Article";
import Project from "./Project";
import ContactForm from "./ContactForm";

export default function Main(props) {
  // if multi page is true include x outside of any articles. Otherwise include on only article
  let close = (multiPaged) => {
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

  return (
    <div
      id="main"
      style={props.timeout ? { display: "flex" } : { display: "none" }}
    >
      <div>
        <Article
          page={props.aboutPage}
          page2={props.aboutPage.node}
          type="about"
          article={props.article}
          articleTimeout={props.articleTimeout}
          close={close(false)}
          first={true}
        />

        <div>
          <br />
          <br />
          {props.projects.map(({ node }) => {
            return (
              <React.Fragment key={node.priority}>
                <Project
                  page={node}
                  type="projects"
                  article={props.article}
                  articleTimeout={props.articleTimeout}
                  first={node.isfirst}
                  close={close(true)}
                />

                <br />
                </React.Fragment>
            );
          })}
        </div>

        <Article
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
        className={`${props.article === "contact" ? "active" : ""} ${
          props.articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <ContactForm />

        {close(false)}
      </article>
    </div>
  );
}
