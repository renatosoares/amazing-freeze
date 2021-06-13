import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Container from "components/atoms/Container";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const Root = styled.div`
  background-blend-mode: color, normal;
  color: #fff;
  height: 100vh;
  width: 100%;
  text-align: center;

  ${(props) => css`
    background: url(${props.image}),
      linear-gradient(180deg, rgb(21 18 6) 0%, rgb(251 255 0 / 1%) 100%);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  `}
`;

const FilterBlur = styled.div`
  animation: changeWidth 8s ease-in-out infinite;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-right: 1px solid whitesmoke;
  height: 100vh;
`;

const HighlightMedia = styled.div`
  height: 80vh;
  margin-top: 10vh;

  ${breakAt(BreakpointSizes.lg)} {
    margin-top: 5vh;
  }

  img {
    border: 8px solid rgb(255 255 255 / 0%);
    box-shadow: rgba(255 255 255 / 15%) 7px 7px 17px 0px;
    width: 100%;

    ${breakAt(BreakpointSizes.lg)} {
      height: 100%;
      width: auto;
      border-width: 24px;
    }
  }
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
    <FilterBlur>
      <Container>
        <Content>{children}</Content>
        <HighlightMedia>
          <img src={image} alt="" />
        </HighlightMedia>
      </Container>
    </FilterBlur>
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
