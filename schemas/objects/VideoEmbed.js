import videoEmbedPreview from '../../previews/VideoEmbedPreview'

export default {
  title: "Video Embed",
  name: "videoEmbed",
  type: "object",
  fields: [
    {
      title: "Source",
      name: "source",
      type: "string",
      options: {
        list: [{title: "YouTube", value: "youtube"}, {title: "Vimeo", value: "vimeo"}],
        layout: "radio",
        direction: "horizontal"
      }
    },
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