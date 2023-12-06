import AnchorLink from "react-anchor-link-smooth-scroll";
import { PrismicRichText } from "@prismicio/react";

export default function Article(props) {
  return (
    <article
      id={props.id}
      key={props.id}
      className={`${props.article === props.type ? "active" : ""} ${
        props.articleTimeout ? "timeout" : ""
      } `}
      style={{ display: "none" }}
    >
      <h2 className="major">{props.page?.title[0].text ?? null}</h2>

      <span className="image main">
        <a href={props.page?.link && props.page?.link[0].text}>
          <img src={props.page.image?.url ?? null} alt="" />
        </a>
      </span>

      <PrismicRichText field={props.page.content} />

      {props.hasTag && (
        <>
          <div style={{ textAlign: "center" }}>
            {" "}
            <AnchorLink className="noDots" href={props.tag}>
              <img src="/images/invertedArrows.png" alt={"image not found"} />
            </AnchorLink>
          </div>
        </>
      )}

      {props.first && props.close}
    </article>
  );
}
