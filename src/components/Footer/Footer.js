import React from "react";
// scss
import "./footer.scss";
// link
import { Link } from "react-router-dom";
import BackToTop from "../BackToTop/BackToTop";

const Footer = () => {
  return (
    <>
      <footer id="footer" class="footer">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span> NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <Link to="/">BootstrapMade</Link>
        </div>
      </footer>
      {/* back to top */}
      <BackToTop />
    </>
  );
};

export default Footer;
