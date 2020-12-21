import React from "react";

// import Image from "../shared/image";

// import DAI from "./DAI.png";
import TRB from '../../images/tokens/TRB.png';
import DAI from '../../images/tokens/DAI.png';

import "./section.scss";

const Tokens = () => (
  <section className="Tokens" id="tokens">
    <div className="Tokens__totalbox">
    <h3>Commodo works with these tokens</h3>
    <div className="Tokens__list">

    <div className="Tokenspair">
      <div className="Tokenspair__pair">
        <div className="coll">
          <img src={TRB} alt='Collateral token'/>
        </div>
        <div className="borr">
          <img src={DAI} alt='borrow token'/>  
        </div>
      </div>
      <p>TRB - DAI</p>
    </div>

    <div className="Tokenspair">
      <div className="Tokenspair__pair">
        <div className="coll">
          {/* <img src={TRB} alt='Collateral token'/> */}
        </div>
        <div className="borr">
          {/* <img src={DAI} alt='borrow token'/>   */}
        </div>
      </div>
      {/* <p>TRB - DAI</p> */}
    </div>

    <div className="Tokenspair">
      <div className="Tokenspair__pair">
        <div className="coll">
          {/* <img src={TRB} alt='Collateral token'/> */}
        </div>
        <div className="borr">
          {/* <img src={DAI} alt='borrow token'/>   */}
        </div>
      </div>
      {/* <p>TRB - DAI</p> */}
    </div>

    <div className="Tokenslink">
      <p>
        Didn’t find what you’re looking for?<br /><a href="https://forms.gle/tdqQsuK8XXMRYxqH7">request a token</a>
      </p>
    </div>
    </div>
    </div>
  </section>
);

export default Tokens;
