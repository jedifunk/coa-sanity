import videoPreview from "../../previews/VideoPreview"

export default {
  title: "Video",
  name: "video",
  type: "file",
  options: {
    accept: "video/*",
    storeOriginalFilename: true
  },
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string",
    }
  ],
  preview: {
    select: {
      url: 'asset',
      media: 'asset',
      title: 'caption'
    },
    components: {
      preview: videoPreview
    }
  },
}