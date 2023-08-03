import React from 'react'
import {useClient} from 'sanity'
import imageUrlBuilder from '@sanity/image-url'

const galleryPreview = (props) => {

  const client = useClient({apiVersion:"2021-10-21"})
  const urlFor = (source) => imageUrlBuilder(client).image(source)
  
  const images = props.images
  const cols = props.columns
  
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

  if (!Array.isArray(images)){
    return <span>Add Images</span>
  }

  return (
    <div style={wrapperStyles}>
      {props.images &&
        props.images.map(image => (image.asset != null &&
          <figure key={image._key} data-log={image._key} style={figureStyles}>
            <img src={urlFor(image).url()} style={figureImgStyles}/>
          </figure>
        ))
      }
    </div>
  )
}

export default galleryPreview