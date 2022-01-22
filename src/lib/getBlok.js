import React from "react"
import { sbEditable } from "@storyblok/storyblok-editable"

export default function getBlok(blok) {
  const { component, _uid, columns } = blok

  const dynamicComponents = () => {
    if (typeof component !== 'undefined') {
      const DynamicComponents = component
      return <DynamicComponents blok={blok} key={_uid} column={columns} />
    }
    return component ? 'Ops' : null
  }

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
          <ul>
            {blok.columns.map((column, index) => {
              return (
                <li column={column}>
                  <pre key={index}>{JSON.stringify(column, null, 2)}</pre>
                  {console.log(dynamicComponents(column))}
                  {console.log(column)}
                </li>
              )
            })}
          </ul>
        </div>
      )

    case 'feature':
      return (
        <div {...sbEditable(blok)}>
          <h2>{blok.name}</h2>
          <pre>{JSON.stringify(blok, null, 2)}</pre>
          <img src={blok.image.filename} alt={blok.image.alt} />
        </div>
      )

    default:
      return null
  }
}