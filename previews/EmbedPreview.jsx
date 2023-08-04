import React from 'react'
import getVideoId from 'get-video-id'

const Embed = ( props ) => {

  let iFrameStyles = {
    width: '100%',
    height: '100%',
    aspectRatio: '16/9'
  }

  let figStyle = {
    margin: '0'
  }
  let figCap = {
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Liberation Sans",Helvetica,Arial,system-ui,sans-serif',
    fontWeight: '600',
    fontSize: '.8125rem'
  }

  function getEmbedCode(props) {
    const videoId = (props && props.url) ? getVideoId(props.url) : ''

    if (!videoId) {
      return (<div>Add Video</div>)
    } else if (videoId.service === 'youtube') {
      return (
        <figure style={figStyle}>
          <iframe style={iFrameStyles} src={`https://www.youtube.com/embed/${videoId.id}?rel=0`} frameBorder="0" allowFullScreen />
          <figcaption style={figCap}>{props.title}</figcaption>
        </figure>
      )
    } else {
      return (
        <figure style={figStyle}>
          <iframe
            style={iFrameStyles}
            src={`https://player.vimeo.com/video/${videoId.id}`}
            width="640"
            frameBorder="0"
            allowFullScreen
          />
          <figcaption style={figCap}>{props.title}</figcaption>
        </figure>
      )
    }
  }

  function chooseEmbedType(props) {
    
    const link = (props && props.url) ? props.url : ''

    if (!link) {
      return (<div>Add Link</div>)
    } else if (link.includes('spotify')) {
      let spotifyItem = link.split('https://open.spotify.com/')[1].split('?si')[0]

      return (
        <figure style={figStyle}>
          <iframe src={`https://open.spotify.com/embed/${spotifyItem}?utm_source=generator&theme=0`} width="100%" height="80" frameBorder="0"></iframe>
          <figcaption style={figCap}>{props.title}</figcaption>
        </figure>
      )
    } else {
      return getEmbedCode(props)
    }
  }

  return (
    chooseEmbedType(props)
  )
}

export default Embed