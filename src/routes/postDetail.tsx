import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Error from "components/pages/Error";
import PostDetailPage from "components/pages/PostDetail";
import NotFoundImage from "draws/About";

import { useScrollToTop } from "hooks/scroll";
import { usePost as UsePost } from "hooks/posts";
import PostProps from "models/types/PostProps";

const PostDetail = () => {
  useScrollToTop();
  const [hasPost, setHasPost] = useState(false);
  const [postSerialize, setPostSerialize] = useState<PostProps>({
    id: 0,
    image: "",
    title: "",
    summary: "",
    slang: "",
    mediaId: 0,
  });

  const { slang }: { slang: string } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await UsePost({ slang });

      setHasPost(!post);

      if (!!post) {
        setPostSerialize({
          id: post.id,
          title: post.title.rendered,
          slang: post.slug,
          summary: post.content.rendered,
          image: "",
          mediaId: post.featured_media,
        });
      }
    };

    fetchPost();
  }, []);

  if (hasPost) {
    return (
      <Error
        image={<NotFoundImage />}
        title="Post not found"
        description="Post not found or unavailable"
      />
    );
  }

  return <PostDetailPage post={postSerialize}></PostDetailPage>;
};

export default PostDetail;
