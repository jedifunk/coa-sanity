import React from 'react'
//import client from 'part:@sanity/base/client'
import {useClient} from 'sanity'
import urlBuilder from '@sanity/image-url'

const client = useClient()
const urlFor = source => urlBuilder(client).image(source)

const galleryPreview = ({ value = {} }) => {

  const cols = value.columns
  let wrapperStyles = {
    display: 'grid',
    gridTemplateColumns:`repeat(${cols}, 1fr)`,
    gap: `10px`,
    lineHeight: 0
  }
  let figureStyles = {
    margin: 0,
    aspectRatio: `1/1`,
  }
  let figureImgStyles = {
    width: `100%`,
    height: `100%`,
    objectFit: `cover`
  }

  if (!value.images){
    return <span />
  }

  return (
    <div style={wrapperStyles}>
      {value &&
        value.images.map(image => (
          <figure key={image._key} style={figureStyles}>
            <img src={urlFor(image).url()} style={figureImgStyles}/>
          </figure>
        ))
      }
    </div>
  )
}

export default galleryPreview