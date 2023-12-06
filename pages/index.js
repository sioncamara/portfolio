import Head from "next/head";
import {
  getAboutPage,
  getSkillsPage,
  getAllProjects,
  getResume,
} from "../lib/api";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
// You should do that in a Layout file or in `gatsby-browser.js`.

export default function index({ aboutPage, skillsPage, projects, resume }) {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeout] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState("is-loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading("");
    }, 100);

    if (timer) return () => clearTimeout(timeoutId);
  }, []);

  const handleOpenArticle = (article) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setTimeout(!timeout);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimeout(!timeout);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle("");
    }, 350);
  };

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? "is-article-visible" : ""
      }`}
    >
      <div>
        <Head>
          <title>Sion Wilks</title>
          <link href="/images/logo.ico" rel="shortcut icon" />
          <meta property="og:title" content="Sion Wilks" />
          <meta property="og:image" content="/images/portfolio-preview.png" />
        </Head>

        <div id="wrapper">
          <Header
            onOpenArticle={handleOpenArticle}
            timeout={timeout}
            resume={resume}
          />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            aboutPage={aboutPage}
            skillsPage={skillsPage}
            projects={projects}
          />
          <Footer timeout={timeout} />
        </div>

        <div id="bg" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const aboutPage = await getAboutPage();
  const skillsPage = await getSkillsPage();
  const projects = await getAllProjects();
  const resume = await getResume();

  return {
    props: {
      aboutPage,
      skillsPage,
      projects,
      resume,
    },
  };
}
