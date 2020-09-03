import React from "react";

import "./footer.scss";
import Icons from '../shared/icons';

const Footer = () => (
  <footer>
    <div className="Footer">
        <div className="Footer_logoandc">
          <Icons.Logo fill="#fff" width="200px" />
          <p>© 2020</p>
        </div>
        <div className="Footer__links">
          <p>Commodo is the open source framework for collateral-backed lending with ERC20 tokens.</p>
          <a href="https://github.com/mikeghen/commodo" target="blank">Find us on Github</a>
        </div>
    </div>
  </footer>
);

export default Footer;
