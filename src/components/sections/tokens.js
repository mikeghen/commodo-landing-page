import React from "react";

import Image from "../shared/image";

import "./section.css";

const Tokens = () => (
  <section>
    <h3>Commodo works with these tokens</h3>
    <div className="Tokens__list">
      <div style={{ width: "50px" }}>
        <Image />
      </div>
      <div style={{ width: "50px" }}>
        <Image />
      </div>
      <div style={{ width: "50px" }}>
        <Image />
      </div>
      <div style={{ width: "50px" }}>
        <Image />
      </div>
      <p>
        Zombie ipsum reversus ab viral inferno. <a href="#">request link</a>
      </p>
    </div>
  </section>
);

export default Tokens;
