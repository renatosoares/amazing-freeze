import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";
import ButtonWrapper from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...props} {...events}>
        DEFAULT
      </Button>
      <Button color="primary" {...props} {...events}>
        PRIMARY
      </Button>
      <Button color="danger" {...props} {...events}>
        DANGER
      </Button>
    </Toolbar>
    <p>As a link:</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>
        DEFAULT
      </Button>
      <Button as="a" href="#" color="primary" {...props} {...events}>
        PRIMARY
      </Button>
      <Button as="a" href="#" color="danger" {...props} {...events}>
        DANGER
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...props} {...events}>
        DEFAULT
      </Button>
      <Button disabled color="primary" {...props} {...events}>
        PRIMARY
      </Button>
      <Button disabled color="danger" {...props} {...events}>
        DANGER
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;
