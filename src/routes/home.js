import React, { useEffect, useState } from "react";

import HomePage from "components/pages/Home";

import { getPosts } from "hooks/posts";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "",
      slang: "",
      summary: "",
      image: "",
      mediaId: 0,
    },
  ]);

  useEffect(() => {
    const setPostsResult = async () => {
      setPosts(await getPosts());
    };

    setPostsResult();
  }, []);

  return <HomePage products={posts} />;
};

export default Home;
