import { Link } from "gatsby";
import React from "react";
import * as styles from "./button.module.css";

export default function Button(props) {
  const { url, label, className, colourModifier, tel = false } = props || {};

  if (tel) {
    return (
      <a className={`${styles.btn} ${className ?? ""}`} href={`tel:${url}`}>
        {url}
      </a>
    );
  }
  return (
    <Link to={url} className={`${styles.btn} ${className ?? ""}`}>
      {label}
    </Link>
  );
}
