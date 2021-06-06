import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Container from "components/atoms/Container";

const Root = styled.div`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);

  height: 100vw;

  ${(props) => css`
    background-image: url(${props.image});
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
  `}
`;

const Content = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgb(21 18 6 / 69%) 0%,
    rgb(80 63 13 / 68%) 35%,
    rgb(251 255 0 / 2%) 100%
  );

  display: inline-block;
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${(props) => props.theme.colors.primary.main};
    }
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  /**
   * Image Background
   */
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
