import { Link } from "gatsby";
import React from "react";
import * as styles from "./button.module.css";

export default function Button(props) {
  const {
    url,
    label,
    className,
    colourModifier,
    tel = false,
    style = "default",
  } = props || {};

  if (tel) {
    return (
      <a
        className={`${className} ${styles.btn} ${styles.btnWhite}`}
        href={`tel:${url}`}
      >
        {url}
      </a>
    );
  }
  return (
    <Link
      to={url}
      className={`${styles.btn} ${className} ${
        colourModifier === "white" ? styles.btnWhite : ""
      }`}
    >
      {label}
    </Link>
  );
}
