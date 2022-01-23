import * as React from "react"

const Feature = ({ blok }) => {
  return (
    <div style={{ margin: `0 .5rem` }}>
      <h2>{blok.name}</h2>
      <pre>{JSON.stringify(blok, null, 2)}</pre>
      <img src={blok.image.filename} alt={blok.image.alt} />
    </div>
  )
}

export default Feature