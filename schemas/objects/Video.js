import videoPreview from "../../previews/VideoPreview";

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
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      url: 'asset',
      title: 'caption'
    },
    component: videoPreview
  }
}