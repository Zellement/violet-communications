import React from "react"

const isExternalLink = (url) => {
  const currentSiteUrl = process.env.NEXT_PUBLIC_SITE_URL

  try {
    const targetUrl = new URL(url)
    const targetFullUrl = targetUrl.protocol + "//" + targetUrl.host

    return currentSiteUrl != targetFullUrl
  } catch (e) {
    return false
  }
}

export default isExternalLink
