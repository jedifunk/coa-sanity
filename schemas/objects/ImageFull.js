import imagePreview from "../../previews/ImagePreview";

export default {
  title: "Full Image",
  name: "imageFull",
  type: "image",
  options: {
    metadata: ['exif', 'location',],
    hotspot: true,
  },
  fields: [
    {
      title: "Alt",
      name: "alt",
      type: "string",
      options: {
        isHighlighted: true
      }
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
      options: {
        isHighlighted: true
      }
    }
  ]
}