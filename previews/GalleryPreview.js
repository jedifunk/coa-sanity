import React from 'react'
import client from 'part:@sanity/base/client'
import urlBuilder from '@sanity/image-url'

const urlFor = source => urlBuilder(client).image(source)

const galleryPreview = ({ value = {} }) => {
  let wrapperStyles = {
    display: 'grid',
    gridTemplateColumns:'repeat(3, 1fr)'
  }
  let figureStyles = {
    margin: '1rem'
  }
  let figureImgStyles = {
    maxWidth: '100%'
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