import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import bgLensImage from "stories/assets/bg-lens.jpg";
import bgBirdImage from "stories/assets/bg-bird.jpg";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgLensImage}>
    <h1>{text("Title", "Sed voluptate tenetur adipisci exercitationem.")} </h1>
    <p>
      {text(
        "Text",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      )}
    </p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgBirdImage}>
    <Heading>
      <h1>
        Dolor sit amet <strong>consectetur</strong>
        <br />
        adipisicing elitit
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    </ul>
    <Button color="primary" variant="outlined">
      Dolor sit amet
    </Button>
  </Hero>
);
