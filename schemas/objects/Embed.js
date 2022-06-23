import embedPreview from '../../previews/EmbedPreview'

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
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      url: 'url',
      title: 'caption'
    },
    component: embedPreview
  }
}