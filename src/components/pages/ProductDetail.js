import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import ProductType from "models/types/ProductType";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";

import TeachingImage from "draws/Teaching";
import BreadCrumb from "components/atoms/BreadCrumb";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ContentDetail = styled.div`
  text-align: justify;

  figure.wp-block-image {
    text-align: center;

    [class^="wp-image"] {
      border: 8px solid rgb(255 255 255 / 11%);
      box-shadow: rgba(0 0 0 / 30%) 7px 7px 17px 0px;
      height: auto;
      width: 100%;

      ${breakAt(BreakpointSizes.lg)} {
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

const ProductDetail = ({ product }) => {
  const [highlightImage, setHighlightImage] = useState("");
  useEffect(() => {
    const elBlockImageWpImage = document.querySelector(
      ".wp-block-image > img[class^=wp-image]"
    );

    if (elBlockImageWpImage) {
      setHighlightImage(elBlockImageWpImage.getAttribute("src"));
    }
  }, [product.summary]);

  return (
    <>
      <Hero image={highlightImage}>
        <BreadCrumb
          items={[
            { label: "Home", link: "/" },
            { label: "Services" },
            { label: product.title },
          ]}
        />
      </Hero>
      <Section>
        <ContentDetail
          dangerouslySetInnerHTML={{ __html: product.summary }}
        ></ContentDetail>
        <h5>Necessary documents:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            Lorem ipsum
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            Amet consectetur
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Numquam dignissimos sequi
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            perspiciatis porro
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Make your registration right now!</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              animi numquam dignissimos sequi ex accusantium magnam voluptatum
              deserunt pariatur iusto cum delectus, enim unde cupiditate
              perspiciatis porro amet, facere nemo.
            </p>
            <CalloutActions>
              <Button color="primary">Matriculate</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <TeachingImage />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
