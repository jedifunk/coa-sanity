import videoPreview from "../../components/preview/VideoPreview"

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
      url: 'asset.url',
      title: 'caption'
    },
  },
  components: {
    preview: videoPreview
  }

}