import Person from 'react-icons/lib/md/person-pin'

export default {
  title: "Author",
  name: "author",
  icon: Person,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Image",
      name: "image",
      type: "imageFull",
    },
    {
      title: "Bio",
      name: "bio",
      type: "array",
      of: [{type: "block"}],
      description: "A little ditty about the author"
    }
  ]
}