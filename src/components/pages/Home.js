import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  FaChargingStation,
  FaCameraRetro,
  FaImage,
  FaUserClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import ProductType from "models/types/ProductType";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

const getFirstHighlightPost = async () => {
  let highlightPost = {};
  const myHeaders = new Headers();

  const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  const myRequest = new Request(
    `${BASE_URI}posts/?categories=1&per_page=1`,
    myInit
  );

  highlightPost = await fetch(myRequest)
    .then((response) => response.json())
    .then((data) => data.pop());

  return highlightPost;
};

const getMediaById = async (id) => {
  const media = await fetch(`${BASE_URI}media/${id}`)
    .then((response) => response.json())
    .then((data) => data);

  return media;
};

const Home = ({ products }) => {
  const [highlightPost, setHighlightPost] = useState({
    title: { rendered: "" },
    excerpt: { rendered: "" },
  });
  const [highlightMedia, setHighlightMedia] = useState({
    source_url: "",
  });

  const [highlightPosts, setHighlightPosts] = useState([]);

  useEffect(() => {
    const fetchDataPost = async () => {
      setHighlightPost(await getFirstHighlightPost());
    };

    fetchDataPost();
  }, []);

  useEffect(() => {
    const fetchDataMedia = async () => {
      setHighlightMedia(await getMediaById(highlightPost.featured_media));
    };

    if (Object.entries(highlightPost).length > 2) {
      fetchDataMedia();
    }
  }, [highlightPost]);

  useEffect(() => {
    let highlights = [];
    if (products[0].id > 0) {
      products.forEach(async (post) => {
        const media = await getMediaById(post.mediaId);

        highlights.push({ ...post, image: media.source_url });
      });
      setTimeout(() => {
        setHighlightPosts(highlights);
      }, 500);
    }
  }, [products]);

  let imageHero =
    highlightMedia.source_url || `//via.placeholder.com/136x76.png?text=...`;

  return (
    <>
      <Hero image={imageHero}>
        <Heading>
          <h1>{highlightPost.title.rendered}</h1>
        </Heading>
        <Button color="primary" variant="outlined">
          Ver postagem
        </Button>
      </Hero>
      <Section>
        <Grid sm={2} md={4}>
          <Feature
            icon={<FaChargingStation />}
            title="Adipisicing elit, consectetur"
          >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Feature>
          <Feature icon={<FaCameraRetro />} title="Ipsum dolor sit consectetur">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Feature>
          <Feature icon={<FaImage />} title="Ipsum dolor">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Feature>
          <Feature icon={<FaUserClock />} title="Lorem ipsum dolor sit">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Feature>
        </Grid>
      </Section>
      <Section inverse>
        <Heading>
          <h2>Destaques</h2>
        </Heading>
        <ProductGrid products={highlightPosts} />
      </Section>
      <Section>
        <Grid md={2}>
          <div>
            <Heading>
              <h2>4 décadas de profissionalismo</h2>
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              totam eius autem esse cumque neque vero enim quisquam iure nulla
              delectus dolore facere, nam labore, ipsam quae omnis amet ad.{" "}
            </p>
            <div>
              <Button as={Link} to="/about" color="primary">
                Know more
              </Button>
            </div>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YWEuMe72ywM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
      </Section>
      <Section inverse>
        <Heading>
          <h2>Dúvidas recorrentes</h2>
        </Heading>
        <AccordionGroup>
          <Accordion title="How do I use flash during the day?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            sunt. Tempora cumque provident et unde maxime nam, deserunt iusto
            corporis, porro obcaecati neque, nulla reprehenderit quaerat quia
            nostrum ipsa at!
          </Accordion>
          <Accordion title="What is the best portrait lens?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            sunt. Tempora cumque provident et unde maxime nam, deserunt iusto
            corporis, porro obcaecati neque, nulla reprehenderit quaerat quia
            nostrum ipsa at!
          </Accordion>
          <Accordion title="Transporting machinery how do I do it?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            sunt. Tempora cumque provident et unde maxime nam, deserunt iusto
            corporis, porro obcaecati neque, nulla reprehenderit quaerat quia
            nostrum ipsa at!
          </Accordion>
        </AccordionGroup>
      </Section>
      <Footer />
    </>
  );
};

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
