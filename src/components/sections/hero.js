import React from "react";
import { Button } from 'antd';

import "./section.scss";


const Hero = () => (
  <section className="hero">
    <h1>Create your own bank(s)</h1>
    <h3>Commodo is the open source framework for collateral-backed lending with ERC20 tokens.
    </h3>
    <div className="hero_buttons">
      <Button className="heavyshadow" type="primary" size="large">start lending</Button>
      <Button className="heavyshadow" type="primary" size="large">start borrowing</Button>
    </div>

  </section>
);

export default Hero;
