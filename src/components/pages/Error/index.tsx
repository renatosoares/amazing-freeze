import React from "react";
import styled from "styled-components";

import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

type ErrorProps = {
  image?: React.ReactNode | undefined;
  title: string;
  description: string;
};

const ImageContainer = styled.div`
  text-align: right;

  svg {
    width: 100%;
    height: auto;
    max-width: 400px;
    color: var(--bs-primary);
  }
`;

const ErrorMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const ErrorTitle = styled.h1`
  margin-top: 0;
`;

const Grid = styled.div``;

const Error = ({
  image = undefined,
  title = "",
  description = "",
}: ErrorProps) => (
  <Section inverse={false}>
    <Grid className="row row-cols-sm-2">
      <div className="col">
        <Heading>
          <ErrorTitle>{title}</ErrorTitle>
        </Heading>
        <ErrorMessage>{description}</ErrorMessage>
        <div>
          <Button variant="default" as={Link} to="/" color="primary">
            Back to home page
          </Button>
        </div>
      </div>
      <div className="col">
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);

export default Error;
