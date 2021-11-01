import AnchorLink from "react-anchor-link-smooth-scroll";
import { RichText } from "prismic-reactjs";

export default function Article(props) {
  return (
    <article
      id={props.id}
      className={`${props.article === props.type ? "active" : ""} ${
        props.articleTimeout ? "timeout" : ""
      } `}
      style={{ display: "none" }}
    >
      <h2 className="major">{props.page?.node?.title[0].text ?? null}</h2>

      <span className="image main">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs-portfolio-psi.vercel.app/"
        >
          <img src={props.page.node?.image?.url ?? null} alt="" />
        </a>
      </span>

      <RichText render={props.page.node.content} />

      {props.hasTag && (
        <>
          <div style={{ textAlign: "center" }}>
            {" "}
            <AnchorLink className="noDots" href={props.tag}>
              <img
                style={{ maxHeight: "16px", maxWidth: "16px" }}
                src="/images/invertedArrows.png"
              />
            </AnchorLink>
          </div>
        </>
      )}

      {props.first && props.close}
    </article>
  );
}
