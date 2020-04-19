import videoEmbedPreview from '../../previews/VideoEmbedPreview'

export default {
  title: "Video Embed",
  name: "videoEmbed",
  type: "object",
  fields: [
    {
      title: "Url",
      name: "url",
      type: "url"
    }
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: videoEmbedPreview
  }
}