import { defineType, defineField } from "sanity"

export default defineType({
  title: "Full Image",
  name: "imageFull",
  type: "image",
  options: {
    metadata: ['exif', 'location',],
    hotspot: true,
  },
  fields: [
    defineField({
      title: "Alt",
      name: "alt",
      type: "string",
    }),
    defineField({
      title: "Caption",
      name: "caption",
      type: "string",
    })
  ],
})