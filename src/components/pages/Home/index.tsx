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
import PostProps from "models/types/PostProps";

type HomeProps = {
  posts: PostProps[];
};

const HeaderTitle = styled.h1``;

const Home = ({ posts }: HomeProps) => {
  const [highlightPost, setHighlightPost] = useState<ApiPostProps>();
  const [highlightPosts, setHighlightPosts] = useState<PostProps[]>([]);
  const [highlightMedia, setHighlightMedia] = useState({
    source_url: "",
  });

  useEffect(() => {
    const fetchDataPost = async () => {
      const post = await getFirstHighlightPost();

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

  useEffect(() => {
    if (posts.length > 0) {
      posts.forEach(async (post) => {
        const media = await getMediaById(post.mediaId, post.id);
        setHighlightPosts((prevHighlights) => [
          ...prevHighlights,
          { ...post, image: media.source_url },
        ]);
      });
    }
  }, [posts]);

  let imageHero =
    highlightMedia.source_url || `//via.placeholder.com/136x76.png?text=...`;

  let highlightTitle = highlightPost && highlightPost.title.rendered;

  return (
    <div className="home">
      <Hero image={imageHero}>
        <Heading>
          <HeaderTitle className={HeaderTitleStyles.headerTitle}>
            {highlightTitle}
          </HeaderTitle>
        </Heading>
      </Hero>
      <Section inverse>
        <Heading>
          <h2>Destaques</h2>
        </Heading>
        {highlightPosts.length === 0 && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {highlightPosts.length > 0 && <PostGrid posts={highlightPosts} />}
      </Section>
      <Footer />
    </div>
  );
};

export default Home;
