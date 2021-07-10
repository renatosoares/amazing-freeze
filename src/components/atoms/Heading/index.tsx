import React from "react";

import styles from "./Heading.module.scss";
import "./style.scss";

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <div className={styles.heading}>{children}</div>;
};

export default Heading;
