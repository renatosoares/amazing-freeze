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
  text-align: center;

  figure.wp-block-image {
    [class^="wp-image"] {
      border: 24px solid white;
      box-shadow: rgba(0 0 0 / 30%) 7px 7px 17px 0px;
      height: auto;
      width: 80%;
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
        <Heading>
          <h1>{product.title}</h1>
        </Heading>
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
