import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks"

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <div>
      <SocialLinks />
    </div>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
