export const highlightPosts = async () => {
  const postsResponse = fetch(
    "//canindesoares.com/wp-json/wp/v2/posts/?categories=1"
  );

  const [posts] = await Promise.all([postsResponse]);

  const postsJson = await posts.json();

  return postsJson;
};

export const getPosts = async () => {
  const highlight = await highlightPosts();

  const posts = highlight.map((post) => {
    return {
      id: post.id,
      title: post.title.rendered,
      slang: post.slug,
      summary: post.excerpt.rendered,
      image: "",
    };
  });

  return posts;
};
