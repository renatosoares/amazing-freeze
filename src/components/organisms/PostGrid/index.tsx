import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PostProps from "models/types/PostProps";

import Card, { CardMedia, CardBody } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

type PostGridProps = {
  posts: PostProps[];
};

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const PostGrid = ({ posts }: PostGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const filteredPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3">
        {filteredPosts.map((post) => (
          <div key={post.id} className="col">
            <Card>
              <CardMedia image={post.image} />
              <CardBody>
                <Heading>
                  <h6 dangerouslySetInnerHTML={{ __html: post.title }}></h6>
                </Heading>

                <div dangerouslySetInnerHTML={{ __html: post.summary }}></div>
                <div>
                  <Button color="primary" variant="link">
                    Saiba mais
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      {!showAll && (
        <Toolbar>
          <Button
            variant="outlined"
            onClick={() => {
              setShowAll(true);
            }}
          >
            Lista completa das postagens
          </Button>
        </Toolbar>
      )}
    </>
  );
};

export default PostGrid;
