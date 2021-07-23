import React from "react";
import styled, { css } from "styled-components";

type SectionProps = {
  children: React.ReactNode;
  inverse: boolean;
};

const Content = styled.div``;

const Section = ({ inverse, children }: SectionProps) => (
  <Content className={["section", `${inverse ? "inverse" : ""}`].join(" ")}>
    <div className="container">{children}</div>
  </Content>
);

export default Section;
