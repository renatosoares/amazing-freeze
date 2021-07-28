type ApiPostProps = {
  id: number;
  featured_media?: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  [key: string]: unknown;
};

export default ApiPostProps;
