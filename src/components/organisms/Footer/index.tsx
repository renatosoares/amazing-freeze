import React from "react";
import styled from "styled-components";

import Heading from "components/atoms/Heading";

import FooterStyles from "./Footer.module.scss";
import "./styles.scss";

const Root = styled.footer``;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const Footer = () => (
  <Root className={[FooterStyles.footer, "footer"].join(" ")}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Heading>
            <h6>Amazing Freeze</h6>
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
              <i className="fas fa-building"></i>
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
            assumenda accusamus voluptatum sint nemo vel voluptates
          </p>
        </div>
        <div className="social-media col-md-4">
          <Heading>
            <h6>Redes sociais</h6>
          </Heading>
          <p>
            <a className="footer-link" target="_blank" href="facebook.com">
              <IconContainer>
                <i className="fab fa-facebook-f"></i>
              </IconContainer>
              Facebook
            </a>
          </p>
          <p>
            <a className="footer-link" target="_blank" href="linkedin.com">
              <IconContainer>
                <i className="fab fa-linkedin-in"></i>
              </IconContainer>
              Linkedin
            </a>
          </p>
          <p>
            <a className="footer-link" target="_blank" href="twitter.com">
              <IconContainer>
                <i className="fab fa-twitter"></i>
              </IconContainer>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  </Root>
);

export default Footer;
