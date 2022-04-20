import { Link } from "gatsby"
import React from "react"
import * as styles from "./button.module.css"

export default function Button(props) {
  const { url, label } = props || {}

  return (
    <Link to={url} className={`${styles.btn} ${styles["btn__red"]}`}>
      {label}
    </Link>
  )
}
