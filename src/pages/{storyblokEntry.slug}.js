import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import useStoryblok from "../lib/storyblok"
import { sbEditable } from "@storyblok/storyblok-editable"
import getBlok from "../lib/getBlok"

export default function StoryblokEntry({ data, location }) {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
  console.log(story)

  return (
    <div {...sbEditable(story.content)}>
      {story.content.body.map((blok, index) => {
        return <Fragment key={index}>{getBlok(blok)}</Fragment>
      })}
    </div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    storyblokEntry(slug: { eq: $slug }) {
      id
      name
      full_slug
      content
    }
  }
`
