import { MdLocationCity as City} from 'react-icons/md'

export default {
  title: "City",
  name: "city",
  icon: City,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Country",
      name: "country",
      type: "reference",
      to: [{type: "country"}]
    }
  ],
  preview: {
    select: {
      title: "name",
      country: "country.name",
    },
    prepare(selection) {
      const {title, country} = selection
      return {
        title: title,
        subtitle: country,
      }
    }
  }
}