import React from 'react'

const videoPreview = ({ value }) => {
  console.log(value)
  return (
    <figure className="wp-block-video aligncenter">
      <video src={value.url} controls ></video>
      <figcaption>{value.title}</figcaption>
    </figure>
  )
}

export default videoPreview