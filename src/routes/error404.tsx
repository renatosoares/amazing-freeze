import React from "react";

import Error from "components/pages/Error";
import TakenImage from "draws/Taken";

const error404 = () => (
  <Error
    image={<TakenImage />}
    title="Page not found"
    description="Oops! This page has been abducted!"
  />
);

export default error404;
