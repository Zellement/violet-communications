import React from "react"
import Helmet from "react-helmet"

export default function Seo(props) {
  const { description = "Gatsby Starter", title = "Gatsby Starter" } =
    props || {}

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
