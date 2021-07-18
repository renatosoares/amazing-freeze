import React from "react";
import styled from "styled-components";

import Heading from "components/atoms/Heading";

import FooterStyles from './Footer.module.scss'

const Root = styled.footer`

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
  <Root className={[FooterStyles.footer, 'footer'].join(' ')}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
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
        <div className="col-md-4">
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <i className="fas fa-phone"></i>
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
        <div className="col-md-4">
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
        </div>
      </div>
    </div>
  </Root>
);

export default Footer;
