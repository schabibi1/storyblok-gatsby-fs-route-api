import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import useStoryblok from "../lib/storyblok"
import { sbEditable } from "@storyblok/storyblok-editable"

export default function StoryblokEntry({ data, location }) {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const getBlok = (blok) => {
    console.log(blok)
    const { component } = blok

    switch (component) {
      case 'teaser':
        return (
          <div {...sbEditable(blok)}>
            <h2>{blok.headline}</h2>
            <pre>{JSON.stringify(blok, null, 2)}</pre>
          </div>
        )

      case 'grid':
        return (
          <div {...sbEditable(blok)}>
            {blok.columns.map((column, index) => {
              return <pre key={index}>{JSON.stringify(column, null, 2)}</pre>
            })}
          </div>
        )

      case 'feature':
        return (
          <div {...sbEditable(blok)}>
            <h2>{blok.name}</h2>
            <pre>{JSON.stringify(blok, null, 2)}</pre>
          </div>
        )

      default:
        return null
    }
  }

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
