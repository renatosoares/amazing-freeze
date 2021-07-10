import React from "react";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";

// const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

const Home = () => {
  return (
    <>
      <Hero image="//picsum.photos/seed/77/1024/600">
        <Heading>
          <h1>Hello world!</h1>
        </Heading>
      </Hero>
    </>
  );
};

export default Home;
