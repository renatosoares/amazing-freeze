import React from "react";
import styled, { css } from "styled-components";

import HeroStyles from "./Hero.module.scss";
import "./styles.scss";

type HeroProps = {
  image: string;
  children: React.ReactNode;
};

type RootProps = {
  image: string;
};

const Root = styled.div<RootProps>`
  ${(props) => css`
    background-image: url(${props.image}),
      linear-gradient(180deg, rgb(21 18 6) 0%, rgb(251 255 0 / 1%) 100%);
  `};
`;

const Hero = ({ image, children }: HeroProps) => (
  <Root image={image} className={[HeroStyles.hero, "hero"].join(" ")}>
    <div className="filter-blur">
      <div className="container">
        <div className="content">{children}</div>
        <div className="highlight-media">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  </Root>
);

export default Hero;
