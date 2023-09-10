import { MdLocationCity as City} from 'react-icons/md'
import Geometry from '../../components/input/Geometry'

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
      title: 'Geometry',
      name: 'geometry',
      type: 'object',
      fields: [
        {
          title: 'Lookup',
          name: 'geoName',
          type: 'string',
        },
        {
          title: 'Latitude',
          name: 'latitude',
          type: 'number'
        },
        {
          title: 'Longitude',
          name: 'longitude',
          type: 'number'
        },
        {
          title: 'Map Bounds',
          name: 'mapBounds',
          type: 'object',
          hidden: true,
          fields: [
            {
              title: 'northeast',
              name: 'northeast',
              type: 'array',
              of: [{type: 'number'}]
            },
            {
              title: 'Southwest',
              name: 'southwest',
              type: 'array',
              of: [{type: 'number'}]
            }
          ]
        }
      ],
      components: {
        input: Geometry
      }
    },
    {
      title: "Country",
      name: "country",
      type: "reference",
      to: [{type: "country"}]
    },
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