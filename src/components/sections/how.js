import React from "react";

import Image from "../shared/image";

import "./section.css";

const How = () => (
  <section>
    <h3>How does Commodo work?</h3>
    <div style={{ width: "200px" }}>
      <Image />
    </div>
    <div className="How__step">
      <h5>1</h5>
      <p>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis
      </p>
    </div>

    <div className="How__step">
      <h5>2</h5>
      <p>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis
      </p>
    </div>

    <div className="How__step">
      <h5>3</h5>
      <p>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis
      </p>
    </div>

    <button>github</button>
  </section>
);

export default How;
