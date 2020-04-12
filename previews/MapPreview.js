import React from 'react'

const MapPreview = ({ value }) => {
  const { url } = value

  if (!url) {
    return (<div>Forgot the URL?</div>)
  }

  return (
    <div className="responsive-map">
      <figure>
        <iframe 
          //width="640"
          height="480"
          src={url}
          style={{ width: '100%' }}
          frameBorder="no"
          allowTransparency
          allowFullScreen
        />
      </figure>
    </div>
  )
}

export default MapPreview