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
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
    }
  ],
}