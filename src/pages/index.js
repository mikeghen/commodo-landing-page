import React from "react";

import Layout from "../components/shared/layout";
import SEO from "../components/shared/seo";
import Hero from "../components/sections/hero";
import What from "../components/sections/what";
import How from "../components/sections/how";
import Tokens from "../components/sections/tokens";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <What />
    <How />
    <Tokens />
  </Layout>
);

export default IndexPage;
