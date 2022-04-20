import React from "react"
import Seo from "../components/_Seo"

const NotFoundPage = () => (
  <>
    <Seo title="Error" description="Sorry, this page doesn't exist." />
    <h1>Error</h1>
    <p>
      Sorry, this page doesn't exist. Please go to the <a href="/">homepage</a>.
    </p>
  </>
)

export default NotFoundPage
