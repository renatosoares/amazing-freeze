import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Perfect Photography</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
            assumenda accusamus voluptatum sint nemo vel voluptates ipsum,
            distinctio facere nihil eum libero nobis odio consequuntur
            dignissimos commodi asperiores error!
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (11) 98855-2233
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
            assumenda accusamus voluptatum sint nemo vel voluptates
          </p>
        </div>
        <d iv>
          <Heading>
            <h6>Redes sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="#">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="#">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              Linkedin
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="#">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </d>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
