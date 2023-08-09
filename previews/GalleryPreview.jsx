import React from 'react'
import {useClient} from 'sanity'
import imageUrlBuilder from '@sanity/image-url'

const galleryPreview = (props) => {

  const client = useClient({apiVersion:"2023-08-09"})
  const urlFor = (source) => imageUrlBuilder(client).image(source)
  
  const {images, columns} = props
  
  let wrapperStyles = {
    display: 'grid',
    gridTemplateColumns:`repeat(${columns}, 1fr)`,
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

  if (typeof images === 'undefined' || (images && images.length > 0 && !images[0].asset)){
    return (<div>No Images Yet</div>)
  }

  return (
    <div style={wrapperStyles}>
      {images &&
        images.map(image => (image.asset != null &&
          <figure key={image._key} data-log={image._key} style={figureStyles}>
            <img src={urlFor(image).url()} style={figureImgStyles} alt={image.alt}/>
          </figure>
        ))
      }
    </div>
  )
}

export default galleryPreview