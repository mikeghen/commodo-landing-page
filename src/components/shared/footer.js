import React from "react";

import "./footer.scss";
import Icons from '../shared/icons';

const Footer = () => (
  <footer>
    <div className="Footer">
        <Icons.Logo fill="#fff" width="200px" />
        <div className="Footer__links">
          <a href="/">Why use Commodo</a>
          <a href="/">How does it work</a>
          <a href="/">Tokens</a>
        </div>
    </div>
  </footer>
);

export default Footer;
