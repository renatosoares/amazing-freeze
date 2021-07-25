import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Footer from "components/organisms/Footer";
import Section from "components/molecules/Section";
import PostGrid from "components/organisms/PostGrid";

import HeaderTitleStyles from "./HeaderTitle.module.scss";
import "./styles.scss";

import { getFirstHighlightPost } from "hooks/posts";
import { getMediaById } from "hooks/media";

import ApiPostProps from "models/types/ApiPostProps";

const HeaderTitle = styled.h1``;

const Home = () => {
  const [highlightPost, setHighlightPost] = useState<Object>();
  const [highlightMedia, setHighlightMedia] = useState({
    source_url: "",
  });

  useEffect(() => {
    const fetchDataPost = async () => {
      const post = await getFirstHighlightPost();

      console.log('====================================');
      console.log(post);
      console.log('====================================');
      setHighlightPost(post);
    };

    fetchDataPost();
  }, []);

  useEffect(() => {
    if (typeof highlightPost !== "undefined") {
      const fetchDataMedia = async () => {
        setHighlightMedia(
          await getMediaById(highlightPost.featured_media, highlightPost.id)
        );
      };

      if (Object.entries(highlightPost).length > 2) {
        fetchDataMedia();
      }
    }
  }, [highlightPost]);

  let imageHero =
    highlightMedia.source_url || `//via.placeholder.com/136x76.png?text=...`;

  const mockPosts = [{
      id: '1',
      image: '//picsum.photos/id/237/200/300',
      title: 'Lorem ipsum',
      summary: 'Lorem',
      slang: 'lorem-ipsum',
  }]

  return (
    <div className="home">
      <Hero image={imageHero}>
        <Heading>
          <HeaderTitle className={HeaderTitleStyles.headerTitle}></HeaderTitle>
        </Heading>
      </Hero>
      <Section inverse>
        <Heading>
          <h2>Destaques</h2>
        </Heading>
        <PostGrid posts={mockPosts} />
      </Section>
      <Footer />
    </div>
  );
};

export default Home;
