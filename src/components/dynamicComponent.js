import { sbEditable } from "@storyblok/storyblok-editable";
// import Teaser from './teaser'
import React, { Fragment } from 'react'

const Components = {
  // 'teaser': Teaser,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<Fragment {...sbEditable(blok)}><Component blok={blok} /></Fragment>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default DynamicComponent