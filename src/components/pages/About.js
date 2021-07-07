import React from "react";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";

import AboutImage from "draws/About";
import BirdImage from "assets/bg-bird.jpg";
import photographerImage1 from "assets/photographers/photographer-01.png";
import photographerImage2 from "assets/photographers/photographer-02.png";
import photographerImage3 from "assets/photographers/photographer-03.png";
import photographerImage4 from "assets/photographers/photographer-04.png";
import photographerImage5 from "assets/photographers/photographer-05.png";
import photographerImage6 from "assets/photographers/photographer-06.png";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const photographers = [
  {
    id: 1,
    name: "Stott",
    avatar: photographerImage1,
  },
  {
    id: 2,
    name: "John",
    avatar: photographerImage2,
  },
  {
    id: 3,
    name: "Piper",
    avatar: photographerImage3,
  },
  {
    id: 4,
    name: "Washer",
    avatar: photographerImage4,
  },
  {
    id: 5,
    name: "Bunyan",
    avatar: photographerImage5,
  },
  {
    id: 6,
    name: "Spurgeon",
    avatar: photographerImage6,
  },
];

const About = () => (
  <>
    <Hero image={BirdImage}>
      <Heading>
        <h1>Perfect Photography</h1>
      </Heading>
      <BreadCrumb items={[{ label: "Home", link: "/" }, { label: "About" }]} />
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            molestiae modi veniam, provident numquam facilis quia rerum!
            Veritatis explicabo ullam architecto laudantium, rerum assumenda cum
            expedita maxime aspernatur non totam.
          </p>
          <p>
            Dolorem officiis dicta ducimus sed ipsam, unde recusandae. Dolores
            illo, aliquid qui delectus ipsum quae unde ab ipsa blanditiis nihil,
            quia, maxime voluptas nesciunt asperiores voluptates cupiditate ea
            reprehenderit in?
          </p>
          <p>
            Animi harum in perferendis eius error odit. Ipsam ea deserunt
            reiciendis voluptas dignissimos dolores voluptate libero aut eveniet
            at necessitatibus, rerum, nobis natus consequuntur velit. Voluptatum
            tempore ipsam nostrum autem?
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            </li>
            <li>
              Incidunt libero dolorum quaerat obcaecati eius dicta ducimus
            </li>
            <li>
              Minima provident facilis omnis delectus quis nulla doloremque
            </li>
            <li>
              Accusantium doloremque aperiam eveniet, a mollitia iure ipsum
            </li>
            <li>
              Provident sed adipisci, impedit necessitatibus libero, neque odit
            </li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur quisquam architecto commodi tempore minus. Quod
            voluptatum unde ullam cumque voluptatibus esse magnam aliquid illum
            nam asperiores. Sed nam repellendus consequatur.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            autem aspernatur quod eum, rem quam, fuga labore, sapiente
            perspiciatis quasi est saepe! Dolor sequi, quaerat facere ratione
            cupiditate dolore culpa.
          </p>
        </div>
        <div>
          <h4>Vision</h4>
          <p>
            Reiciendis eius similique quaerat, delectus enim facere placeat
            voluptatum ullam saepe alias obcaecati aut nobis? Eius nihil atque
            perspiciatis possimus magnam nisi repudiandae tenetur. Voluptate
            aliquid molestiae error impedit culpa.
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Meet our photographers</h2>
      </Heading>
      <Grid sm={2} md={3} lg={4}>
        {photographers.map((photographer) => (
          <Card key={photographer.id}>
            <CardMedia image={photographer.avatar}>
              <CardMediaDescription>
                <h5>{photographer.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);

export default About;
