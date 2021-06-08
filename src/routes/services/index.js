import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetailPage from "components/pages/ProductDetail";
import Error from "components/pages/Error";
import NotFoundImage from "draws/About";

import { useScrollToTop } from "hooks/scroll";
import { usePost as UsePost } from "hooks/posts";

const ProductDetail = () => {
  useScrollToTop();
  const [postSerialize, setPostSerialize] = useState({
    id: 0,
    title: "",
    slang: "",
    summary: "",
    image: "",
    mediaId: "",
  });

  const { slang } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await UsePost({ slang });

      if (!post) {
        return (
          <Error
            image={<NotFoundImage />}
            title="Service not found"
            description="service not found or unavailable"
          />
        );
      }

      setPostSerialize({
        id: post.id,
        title: post.title.rendered,
        slang: post.slug,
        summary: post.content.rendered,
        image: "",
        mediaId: post.featured_media,
      });
    };

    fetchPost();
  }, []);

  return <ProductDetailPage product={postSerialize} />;
};

export default ProductDetail;
