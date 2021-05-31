import React from "react";
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

import BirdImage from "assets/bg-bird.jpg";
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

const ProductDetail = ({ product }) => (
  <>
    <Hero image={BirdImage}>
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        dicta veniam, iure ipsum architecto ipsam facilis dolore provident optio
        commodi, porro enim cum, recusandae nisi laboriosam esse expedita nam
        cupiditate?
      </p>
      <p>
        Eum deserunt magnam quidem tenetur quod! Dolorum itaque neque ut
        consectetur, ipsum tempora ea odit quibusdam natus nulla accusamus quo,
        aliquam asperiores qui id laborum? Voluptas totam exercitationem esse
        voluptatum.
      </p>
      <p>
        Repudiandae eum, beatae non earum dolores doloremque, fugit unde quos
        consequuntur atque sequi eligendi distinctio nobis! Commodi, enim,
        expedita, nulla similique sed aliquid maiores saepe nisi facilis odit
        beatae repellendus.
      </p>
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

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
