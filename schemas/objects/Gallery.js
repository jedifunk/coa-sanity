//import galleryPreview from '../../previews/GalleryPreview'

export default {
  title: "Image Gallery",
  name: "gallery",
  type: "object",
  // preview: {
  //   select: {
  //     images: "images"
  //   },
  //   component: galleryPreview
  // },
  fields: [
    {
      title: "Columns",
      name: "columns",
      type: "number",
      validation: Rule => Rule.required().min(2).max(5)
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{type: "imageFull"}],
      options: {
        layout: "grid"
      }
    }
  ]
}