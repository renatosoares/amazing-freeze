import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductProps from "models/types/ProductProps";

import Card, { CardMedia, CardBody } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

type ProductGridProps = {
  products: ProductProps[];
};

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }: ProductGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <div className="row row-cols-md-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <Card>
              <CardMedia image={product.image} />
              <CardBody>
                <Heading>
                  <h6 dangerouslySetInnerHTML={{ __html: product.title }}></h6>
                </Heading>

                <div
                  dangerouslySetInnerHTML={{ __html: product.summary }}
                ></div>
                <div>
                  <Button
                    color="primary"
                    variant="link"
                  >
                    Saiba mais
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
