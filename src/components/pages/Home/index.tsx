import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";

import HeaderTitleStyles from "./HeaderTitle.module.scss";
import "./styles.scss";

const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

const HeaderTitle = styled.h1``;

const getFirstHighlightPost = async () => {
  let highlightPost = {};
  const myHeaders = new Headers();

  const myInit: RequestInit = {
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

type HighlightPostProps = {
  id?: number;
  featured_media?: number;
  [key: string]: unknown;
  // title: { rendered: string };
  // except: { rendered: string };
};

const Home = () => {
  const [highlightPost, setHighlightPost] = useState<HighlightPostProps>();
  const [highlightMedia, setHighlightMedia] = useState({
    source_url: "",
  });

  const getMediaById = async (id = 0, postId = 0) => {
    const uriMedia = "media";
    const uriMediaParent = "media?parent=";
    let fetchUri = `${BASE_URI}${uriMedia}/${id}`;

    if (id === 0) {
      fetchUri = `${BASE_URI}${uriMediaParent}${postId}`;
    }

    const media = await fetch(fetchUri)
      .then((response) => response.json())
      .then((data) => (id > 0 ? data : data.pop()));

    return media;
  };

  useEffect(() => {
    const fetchDataPost = async () => {
      setHighlightPost(await getFirstHighlightPost());
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

  return (
    <div className="home">
      <Hero image={imageHero}>
        <Heading>
          <HeaderTitle className={HeaderTitleStyles.headerTitle}></HeaderTitle>
        </Heading>
      </Hero>
    </div>
  );
};

export default Home;
