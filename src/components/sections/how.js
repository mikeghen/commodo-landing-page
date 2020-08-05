import React from "react";

import illuhow from "../../images/illu_how.png";
import illuhowmobile from "../../images/illu_how_mobile.png";

import Icons from '../shared/icons';

import { Button } from 'antd';
import { useMediaQuery } from 'react-responsive';


import "./section.scss";

const How = () => {
  const isMobile = useMediaQuery({query: '(max-device-width: 604px)'})
  return (
  <section className="How">
  <div className="How__totalbox">
    <h3>How does Commodo work?</h3>
    <div className="How__img">
    {isMobile ?
      <img src={illuhowmobile} alt="illustration on how Commodo works" />
      :
      <img src={illuhow} alt="illustration on how Commodo works" />
    }
    </div>
    <div className="How__step">
      <h5>1</h5>
      <p>Each deployment of Commodo is considered a Bank, owned by the account that deployed it. The owner sets the rates and the tokens that are accepted on deployment. The rates are unchangeable after deployment.</p>
    </div>

    <div className="How__step">
      <h5>2</h5>
      <p>
      The owner is responsible for supplying the debt tokens (e.g. USDC). If the price of the tokens changes, anyone can update the prices using the Tellor Oracle.
      </p>
    </div>

    <div className="How__step">
      <h5>3</h5>
      <p>
      Borrowers can deposit collateral tokens (e.g. TRB) and then borrow the debt tokens the bank owner supplied. Interest accrues on borrowed tokens until the debt is repaid by the borrower. If a borrower becomes undercollateralized, anyone can trigger a liquidation but, the liquidation proceeds are deposited back into the bank.
      </p>
    </div>
      <Button type="primary" size="large"><Icons.Github fill="#4F56B5" width="26px" />find the code on Github</Button>
    </div>
  </section>
)};

export default How;
