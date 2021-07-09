import React from "react";
import styled, { css } from "styled-components";

type HeroProps = {
  image: string;
  children: React.ReactNode;
};

type RootProps = {
  image: string;
};

const Root = styled.div<RootProps>`
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

  @include media-breakpoint-up(lg) {
    margin-top: 5vh;
  }

  img {
    border: 8px solid rgb(255 255 255 / 0%);
    box-shadow: rgba(255 255 255 / 15%) 7px 7px 17px 0px;
    width: 100%;

    @include media-breakpoint-up(lg) {
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
      color: $primary;
    }
  }
`;

const Hero = ({ image, children }: HeroProps) => (
  <Root image={image} data-testid="hero">
    <FilterBlur>
      <div className="container">
        <Content>{children}</Content>
        <HighlightMedia>
          <img src={image} alt="" />
        </HighlightMedia>
      </div>
    </FilterBlur>
  </Root>
);

export default Hero;
