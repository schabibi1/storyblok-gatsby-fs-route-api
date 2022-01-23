import * as React from "react"
import DynamicComponent from "./dynamicComponent"
import { sbEditable } from '@storyblok/storyblok-editable'

const Grid = ({ blok }) => {
  return (
    <div {...sbEditable(blok)}>
      <ul>
        {blok.columns.map((blok, index) => (
          <li key={blok._uid}>
            <DynamicComponent blok={blok} />
            <pre key={index}>{JSON.stringify(blok, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grid