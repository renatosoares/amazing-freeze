import ApiPostProps from "models/types/ApiPostProps";

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

export const getFirstHighlightPost = async () => {
  let highlightPost = {};
  const myHeaders = new Headers();

  const myInit: RequestInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  const myRequest = new Request(
    `${BASE_URI}posts/?categories=1&per_page=1`,
    myInit
  );

  highlightPost = await fetch(myRequest)
    .then((response) => response.json())
    .then((data) => data.pop());

  return highlightPost;
};



export const getPosts = async () => {
  const highlight = await highlightPosts();

  const posts = highlight.map((post: ApiPostProps) => {
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
