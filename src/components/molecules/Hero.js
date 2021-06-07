import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Container from "components/atoms/Container";

const Root = styled.div`
  background-blend-mode: color;
  color: #fff;
  height: 100vh;

  ${(props) => css`
    background: url(${props.image}),
      linear-gradient(180deg, rgb(21 18 6 / 69%) 0%, rgb(251 255 0 / 1%) 100%);
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  `}
`;

const Content = styled.div`
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
