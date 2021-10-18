import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";
import { FaGem } from "react-icons/fa";

const Header = (props) => {
  console.log("resume",props.resume);
  return(
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      <FaGem style={{ fontSize: "350%", textAlign: "center", position: "relative", top: "1rem" }} />
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
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("skills");
            }}
          >
            {"Skills   "}
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("projects");
            }}
          >
            Projects
          </a>
        </li>

        <li>
          <a  href={props.resume.node.resume.url}>
            Resume
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
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
          }

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
