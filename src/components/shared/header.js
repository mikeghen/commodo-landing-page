import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.css";

import Icons from '../shared/icons';

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header__nav">
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <Icons.Logo fill="#fff" width="200px" />
        </Link>
      </h1>
      <div className="Header__right">
        <a href="/test">Why use Commodo</a>
        <a href="/test">How it works</a>
        <a href="/test" className="img_btn"><Icons.Github fill="#fff" width="32px" /></a>
        <a href="/test" className="dapp_btn">dapp</a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
