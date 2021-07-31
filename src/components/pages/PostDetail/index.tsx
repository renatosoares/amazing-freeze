import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";

import BreadCrumb from "components/atoms/BreadCrumb";
import { mediaBreakpointUp, gridBreakpoints } from "styles/Breakpoints";
import PostProps from "models/types/PostProps";

type PostDetailProps = {
  post: PostProps;
};

const ContentDetail = styled.div`
  text-align: justify;

  figure.wp-block-image {
    text-align: center;

    [class^="wp-image"] {
      border: 8px solid rgb(255 255 255 / 11%);
      box-shadow: rgba(0 0 0 / 30%) 7px 7px 17px 0px;
      height: auto;
      width: 100%;

      ${mediaBreakpointUp(gridBreakpoints.lg)} {
        width: 80%;
      }
    }
  }

  figure.wp-block-gallery {
    margin: 0;
    text-align: center;

    .blocks-gallery-grid {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      list-style-type: none;
      margin: 0;
      padding: 0;

      .blocks-gallery-item {
        figure {
          margin: 0;

          [class^="wp-image"] {
            max-width: 300px;
          }
        }
      }
    }
  }
`;

const PostDetail = ({ post }: PostDetailProps) => {
  const [highlightImage, setHighlightImage] = useState<string>("");
  useEffect(() => {
    const elBlockImageWpImage = document.querySelector(
      ".wp-block-image > img[class^=wp-image]"
    );

    if (elBlockImageWpImage) {
      setHighlightImage(elBlockImageWpImage.getAttribute("src") || "");
    }
  }, [post.summary]);

  return (
    <>
      <Hero image={highlightImage}>
        <BreadCrumb
          items={[
            { label: "Home", link: "/" },
            { label: "Posts" },
            { label: post.title },
          ]}
        />
      </Hero>
      <Section inverse={false}>
        <ContentDetail
          dangerouslySetInnerHTML={{ __html: post.summary }}
        ></ContentDetail>
      </Section>
      <Footer />
    </>
  );
};

export default PostDetail;
