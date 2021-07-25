type ApiPostProps = {
  id: number;
  featured_media?: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  [key: string]: unknown;
};

export default ApiPostProps;
