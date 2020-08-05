import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.scss";
import Icons from '../shared/icons';

import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';


const Links = (props) => (
  <div className="Header__links">
    <a href="/test">Why use Commodo</a>
    <a href="/test">How it works</a>
    <a href="/test" className="img_btn"><Icons.Github fill="#fff" width="32px" />{props.isMobile && 'Commodo on Github'}</a>
    <a href="/test" className="dapp_btn">dapp</a>
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
