import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import useStoryblok from "../lib/storyblok"
import { sbEditable } from "@storyblok/storyblok-editable"
import getBlok from "../lib/getBlok"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const components = story.content.body.map((blok) => {
    return <Fragment key={blok._uid}>{getBlok(blok)}</Fragment>
  })

  return (
    <Layout>
      <div {...sbEditable(story.content)}>
        <Seo title="Home" />
        <h1>{story.content.title}</h1>
        {components}
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`