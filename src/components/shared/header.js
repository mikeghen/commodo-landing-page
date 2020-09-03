import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.scss";
import Icons from '../shared/icons';

import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Links = (props) => (
  <div className="Header__links">
    <AnchorLink to="/#why" title="Why use Commodo" />
    <AnchorLink to="/#how" title="How it works" />
    <a href="https://github.com/mikeghen/commodo" target="blank" className="img_btn"><Icons.Github fill="#fff" width="32px" />{props.isMobile && 'Commodo on Github'}</a>
    <a href="http://dapp.commodo.com" className="dapp_btn">dapp</a>
  </div>
);

const Header = ({ siteTitle }) => {
  const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'})
  return (
  <>
  {isMobile ?
    <div>
      <Menu
        right
        customBurgerIcon={ <Icons.Hamburger /> }
        customCrossIcon={ <Icons.Closer /> } >
        <Links isMobile />
      </Menu>   
      <header className="Header">
        <div className="Header__nav">
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              <Icons.Logo fill="#fff" width="144px" />
            </Link>
          </h1>      
        </div>
      </header>
      </div>
  :
    <div>
    <header className="Header">
      <div className="Header__nav">
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <Icons.Logo fill="#fff" width="200px" />
          </Link>
        </h1>
        {/* <div className="Header__right"> */}
          <Links />
        {/* </div>         */}
      </div>
    </header>
    </div>
  }
  </>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
