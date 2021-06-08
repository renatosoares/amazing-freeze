const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

export const highlightPosts = async () => {
  const postsResponse = fetch(`${BASE_URI}posts/?categories=1`);

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
      mediaId: post.featured_media,
    };
  });

  return posts;
};

export const usePost = async ({ slang }) => {
  const post = await fetch(`${BASE_URI}posts/?slug=${slang}`)
    .then((response) => response.json())
    .then((data) => data.pop());
  return post;
};
