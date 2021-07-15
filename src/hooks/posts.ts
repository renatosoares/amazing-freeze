const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

type PostsUsePostProps = {
  slang: string;
};

export const highlightPosts = async () => {
  const postsResponse = fetch(`${BASE_URI}posts/?categories=1`);

  const [posts] = await Promise.all([postsResponse]);

  const postsJson = await posts.json();

  return postsJson;
};

export const usePost = async ({ slang }: PostsUsePostProps) => {
  const post = await fetch(`${BASE_URI}posts/?slug=${slang}`)
    .then((response) => response.json())
    .then((data) => data.pop());
  return post;
};
