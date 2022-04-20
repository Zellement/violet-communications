import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" description="Gatsby Starter" />
      <section className="container">
        <div className="block-padding">
          <h1 className="">Home Page</h1>
        </div>
      </section>

      <section className="row">
        <div className="container block-padding">
          <Button url={"#"} label={"Button"} />

          <div className="content">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <h2>Lorem ipsum dolor sit amet</h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
