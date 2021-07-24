import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type ButtonWrapperProps = {
  type?: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'danger';
  variant: "default" | "outlined" | "link";
  // as?: Link;
};

// ButtonWrapper.defaultProps = {
//   type: "button",
//   children: undefined,
//   color: "default",
//   variant: "default",
// };

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

export const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const Button = styled.button<ButtonWrapperProps>`
`;

const ButtonOutlined = styled(Button)<ButtonWrapperProps>`
`;

const ButtonLink = styled(Button)<ButtonWrapperProps>`
`;

const ButtonWrapper = (props: ButtonWrapperProps) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} className={`button-${props.variant}`} />;
    case ButtonsVariants.link:
      return <ButtonLink {...props} className={`button-${props.variant}`}/>;
    default:
      return <Button {...props} className="button"/>;
  }
};

export default ButtonWrapper;
