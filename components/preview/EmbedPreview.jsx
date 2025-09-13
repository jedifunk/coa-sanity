// import React from 'react'
// import getVideoId from 'get-video-id'

// const Embed = ( props ) => {

//   let iFrameStyles = {
//     width: '100%',
//     height: '100%',
//     aspectRatio: '16/9'
//   }

//   let figStyle = {
//     margin: '0'
//   }
//   let figCap = {
//     fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Liberation Sans",Helvetica,Arial,system-ui,sans-serif',
//     fontWeight: '600',
//     fontSize: '.8125rem'
//   }

//   function getEmbedCode(props) {
//     const videoId = (props && props.url) ? getVideoId(props.url) : ''

//     if (!videoId) {
//       return (<div>Add Video</div>)
//     } else if (videoId.service === 'youtube') {
//       return (
//         <figure style={figStyle}>
//           <iframe style={iFrameStyles} src={`https://www.youtube.com/embed/${videoId.id}?rel=0`} frameBorder="0" allowFullScreen />
//           <figcaption style={figCap}>{props.title}</figcaption>
//         </figure>
//       )
//     } else {
//       return (
//         <figure style={figStyle}>
//           <iframe
//             style={iFrameStyles}
//             src={`https://player.vimeo.com/video/${videoId.id}`}
//             width="640"
//             frameBorder="0"
//             allowFullScreen
//           />
//           <figcaption style={figCap}>{props.title}</figcaption>
//         </figure>
//       )
//     }
//   }

//   function chooseEmbedType(props) {
    
//     const link = (props && props.url) ? props.url : ''

//     if (!link) {
//       return (<div>Add Link</div>)
//     } else if (link.includes('spotify')) {
//       let spotifyItem = link.split('https://open.spotify.com/')[1].split('?si')[0]

//       return (
//         <figure style={figStyle}>
//           <iframe src={`https://open.spotify.com/embed/${spotifyItem}?utm_source=generator&theme=0`} width="100%" height="80" frameBorder="0"></iframe>
//           <figcaption style={figCap}>{props.title}</figcaption>
//         </figure>
//       )
//     } else {
//       return getEmbedCode(props)
//     }
//   }

//   return (
//     chooseEmbedType(props)
//   )
// }

// export default Embed

import React from 'react'

const Embed = (props) => {
  const [videoId, setVideoId] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const loadVideoId = async () => {
      if (!props?.url) {
        setLoading(false)
        return
      }

      // Check if it's a Spotify link first (no need for get-video-id)
      if (props.url.includes('spotify')) {
        setLoading(false)
        return
      }

      try {
        const getVideoId = (await import('get-video-id')).default
        const id = getVideoId(props.url)
        setVideoId(id)
      } catch (error) {
        console.error('Failed to load get-video-id:', error)
        setVideoId(null)
      } finally {
        setLoading(false)
      }
    }

    loadVideoId()
  }, [props?.url])

  const iFrameStyles = {
    width: '100%',
    height: '100%',
    aspectRatio: '16/9'
  }

  const figStyle = {
    margin: '0'
  }

  const figCap = {
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Liberation Sans",Helvetica,Arial,system-ui,sans-serif',
    fontWeight: '600',
    fontSize: '.8125rem'
  }

  function getEmbedCode() {
    if (loading) {
      return <div>Loading video preview...</div>
    }

    if (!videoId) {
      return <div>Add Video</div>
    }

    if (videoId.service === 'youtube') {
      return (
        <figure style={figStyle}>
          <iframe 
            style={iFrameStyles} 
            src={`https://www.youtube.com/embed/${videoId.id}?rel=0`} 
            frameBorder="0" 
            allowFullScreen 
          />
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

  function chooseEmbedType() {
    const link = (props && props.url) ? props.url : ''
    
    if (!link) {
      return <div>Add Link</div>
    } else if (link.includes('spotify')) {
      let spotifyItem = link.split('https://open.spotify.com/')[1].split('?si')[0]
      return (
        <figure style={figStyle}>
          <iframe 
            src={`https://open.spotify.com/embed/${spotifyItem}?utm_source=generator&theme=0`} 
            width="100%" 
            height="80" 
            frameBorder="0"
          />
          <figcaption style={figCap}>{props.title}</figcaption>
        </figure>
      )
    } else {
      return getEmbedCode()
    }
  }

  return chooseEmbedType()
}

export default Embed