import React from 'react'

const vid = {width: '100%'}
const videoPreview = (props) => {

  return (
    <figure className="wp-block-video aligncenter">
      <video style={vid} src={props?.url} controls ></video>
      <figcaption>{props?.title}</figcaption>
    </figure>
  )
}

export default videoPreview