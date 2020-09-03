import React from "react";

import "./section.scss";


import illu1 from "../../images/illu_1.png";
import illu2 from "../../images/illu_2.png";
import illu3 from "../../images/illu_3.png";
import illu4 from "../../images/illu_4.png";
import line from "../../images/line.png";


const What = () => (
  <section className="What" id="why">
    <div className="What__totalbox">
    <div className="What__cards">
      <div className="What__card">
        <img src={illu1} alt="illustration Transparent" />
        <h3>Transparent</h3>
        <p>
        Commodo has a contract code simple enough to understand by anyone familiar with Solidity.
        </p>
      </div>

      <div className="What__card">
        <img src={illu2} alt="illustration Flexible" />
        <h3>Flexible</h3>
        <p>The type of collateral, debt, and rates can all be configured, making Commodo superflexible and fully customizable.</p>
      </div>

      <div className="What__card">
        <img src={illu3} alt="illustration Ease of use" />
        <h3>Ease of use</h3>
        <p>Deployment and configuration is simple enough for anyone familiar with Ethereum and web programming.</p>
      </div>

      <div className="What__card">
        <img src={illu4} alt="illustration Trust-Minimized" />
        <h3>Trust-Minimized</h3>
        <p>Commodo uses Tellor Oracle for price feeds. There are no special privileges for the contract owner.</p>
      </div>
    </div>
    <div className="What__extra">
      <h2>Existing protocols can’t be redeployed.<br /> 
      Commodo can.</h2>
      <div className="What__extra_box">
      <div className="What__extra_box_img">
        <img src={line} alt="line" />
      </div>
      <p>Most existing protocols for collateral-backed lending with ERC-20 tokens are overly complex. They rely heavy on token-economics, have long and complicated smart contracts and are tied to non-transparent oracle mechanisms for price feeds.<br /><br />Commodo is created as an open-source framework so transparency is of paramount importance. Aimed at your average developer, the contracts are easy to read and redeploy. The unique setup with <a href="https://tellor.io/" target="blank">Tellor Oracle</a> makes for a clear and open infrastructure, true to blockchain-nature.</p>
      </div>
    </div>
    </div>
  </section>
);

export default What;
