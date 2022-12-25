import galleryPreview from '../../previews/GalleryPreview'

export default {
  title: "Image Gallery",
  name: "gallery",
  type: "object",
  fields: [
    {
      title: "Columns",
      name: "columns",
      type: "number",
      initialValue: 3,
      validation: Rule => Rule.required().min(2).max(5)
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{type: "imageFull"}],
      options: {
        layout: "grid"
      },
    }
  ],
  preview: {
    select: {
      images: "images",
      columns: "columns"
    },
  },
  components: {
    preview: galleryPreview
  }
}