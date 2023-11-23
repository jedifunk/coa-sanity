import embedPreview from '../../components/preview/EmbedPreview'

export default {
  title: "Embed",
  name: "embed",
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
      title: 'caption'
    },
  },
  components: {
    preview: embedPreview
  }
}