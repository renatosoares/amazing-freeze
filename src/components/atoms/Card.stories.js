import React from "react";

import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import CupFlowerImage from "stories/assets/cup-flower.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolor, sit
          amet consectetur adipisicing elit.
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={CupFlowerImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolor, sit
          amet consectetur adipisicing elit.
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={CupFlowerImage}>
        <CardMediaDescription>
          <h5>Media description</h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
);
