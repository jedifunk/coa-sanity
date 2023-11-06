import { TbMapPin as Pin } from 'react-icons/tb'
import Geometry from '../../components/input/Geometry'

export default {
  title: "Place",
  name: "place",
  type: "document",
  icon: Pin,
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
      title: 'Place Type',
      name: 'placeType',
      type: "reference",
      to: [{type: "placeType"}],
      validation: Rule => Rule.required(),
    },
    {
      title: "Address",
      name: "address",
      type: "string"
    },
    {
      title: "City",
      name: "city",
      type: 'reference',
      to: [{type: 'city'}]
    },
    {
      title: "Country",
      name: "country",
      type: "reference",
      to: [{type: 'country'}]
    },
    {
      title: 'Favorite',
      name: 'favorite',
      type: 'boolean',
    },
    {
      title: "Website",
      name: "website",
      type: "url"
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 3
    },
    {
      title: "Image",
      name: "image",
      type: "image"
    }
  ]
}