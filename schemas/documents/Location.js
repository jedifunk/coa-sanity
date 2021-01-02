import {GoGlobe as Location} from 'react-icons/go'

export default {
  title: "Location",
  name: "location",
  icon: Location,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Image",
      name: "image",
      type: "imageFull",
      description: "Image to represent this location"
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      description: "Short synopsis of the location"
    }
  ]
}