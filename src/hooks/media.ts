const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

export const getMediaById = async (id = 0, postId = 0) => {
  const uriMedia = "media";
  const uriMediaParent = "media?parent=";
  let fetchUri = `${BASE_URI}${uriMedia}/${id}`;

  if (id === 0) {
    fetchUri = `${BASE_URI}${uriMediaParent}${postId}`;
  }

  const media = await fetch(fetchUri)
    .then((response) => response.json())
    .then((data) => (id > 0 ? data : data.pop()));

  return media;
};
