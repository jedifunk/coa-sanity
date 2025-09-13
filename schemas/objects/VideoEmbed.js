import videoEmbedPreview from '../../components/preview/VideoEmbedPreview'

export default {
  title: "Video Embed",
  name: "videoEmbed",
  type: "object",
  fields: [
    {
      title: "Url",
      name: "url",
      type: "url"
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    }
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: videoEmbedPreview
  }
}