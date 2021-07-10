import React from "react";
import styled from "styled-components";

import { mediaBreakpointUp, gridBreakpoints } from "styles/Breakpoints";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";

import HeaderTitleStyles from "./HeaderTitle.module.scss";
import "./styles.scss";

// const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

const HeaderTitle = styled.h1`
  ${mediaBreakpointUp(gridBreakpoints.lg)} {
    font-size: 1.5rem;
  }
`;

const Home = () => {
  return (
    <div className="home">
      <Hero image="//picsum.photos/seed/77/1024/600">
        <Heading>
          <HeaderTitle className={HeaderTitleStyles.headerTitle}>
            Hello world!
          </HeaderTitle>
        </Heading>
      </Hero>
    </div>
  );
};

export default Home;
