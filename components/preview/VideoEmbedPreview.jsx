// import React from 'react'
// import getVideoId from 'get-video-id'

// const VideoEmbedPreview = ({ value }) => {

//   let iFrameStyles = {
//     width: '100%',
//     height: '100%',
//     aspectRatio: '16/9'
//   }

//   function getEmbedCode(value) {
//     const videoId = (value && value.url) ? getVideoId(value.url) : ''

//     if (!videoId) {
//       return <span />
//     }

//     switch (videoId.service) {
//       case 'youtube': {
//         return <iframe style={iFrameStyles} src={`https://www.youtube.com/embed/${videoId.id}?rel=0`} frameBorder="0" allowFullScreen />
//       }

//       case 'vimeo': {
//         return (
//           <iframe
//             style={iFrameStyles}
//             src={`https://player.vimeo.com/video/${videoId.id}`}
//             width="640"
//             frameBorder="0"
//             webkitallowfullscreen
//             mozallowfullscreen
//             allowFullScreen
//           />
//         )
//       }
//       default: {
//         return <span>Unsupported video service: {videoId.service}</span>
//       }
//     }
//   }

//   return (
//     getEmbedCode(value)
//   )

// }

// export default VideoEmbedPreview

import React from 'react'

const VideoEmbedPreview = ({ value }) => {
  const [videoId, setVideoId] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const loadVideoId = async () => {
      if (!value?.url) {
        setLoading(false)
        return
      }

      try {
        const getVideoId = (await import('get-video-id')).default
        const id = getVideoId(value.url)
        setVideoId(id)
      } catch (error) {
        console.error('Failed to load get-video-id:', error)
        setVideoId(null)
      } finally {
        setLoading(false)
      }
    }

    loadVideoId()
  }, [value?.url])

  const iFrameStyles = {
    width: '100%',
    height: '100%',
    aspectRatio: '16/9'
  }

  if (loading) {
    return <div>Loading preview...</div>
  }

  if (!videoId) {
    return <span>Invalid video URL</span>
  }

  switch (videoId.service) {
    case 'youtube':
      return (
        <iframe 
          style={iFrameStyles} 
          src={`https://www.youtube.com/embed/${videoId.id}?rel=0`} 
          frameBorder="0" 
          allowFullScreen 
        />
      )
    case 'vimeo':
      return (
        <iframe
          style={iFrameStyles}
          src={`https://player.vimeo.com/video/${videoId.id}`}
          width="640"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      )
    default:
      return <span>Unsupported video service: {videoId.service}</span>
  }
}

export default VideoEmbedPreview