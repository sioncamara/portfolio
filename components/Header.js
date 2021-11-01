import PropTypes from "prop-types";
import { FaGem } from "react-icons/fa";

const Header = (props) => {
  return (
    <header id="header" style={props.timeout ? { display: "none" } : {}}>
      <div className="logo">
        <FaGem
          style={{
            fontSize: "350%",
            textAlign: "center",
            position: "relative",
            top: "1rem",
          }}
        />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Sion Wilks</h1>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                props.onOpenArticle("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.onOpenArticle("skills");
              }}
            >
              {"Skills   "}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.onOpenArticle("projects");
              }}
            >
              Projects
            </a>
          </li>

          <li>
            <a href={props.resume.node.resume.url}>Resume</a>
          </li>
          <li>
            <a
              onClick={() => {
                props.onOpenArticle("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
