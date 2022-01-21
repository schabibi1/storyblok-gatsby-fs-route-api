import React from "react"
import { sbEditable } from "@storyblok/storyblok-editable"

export default function getBlok(blok) {
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