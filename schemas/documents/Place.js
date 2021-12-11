import { GrMapLocation as Pin } from 'react-icons/gr'
import LeafletGeopointInput from 'sanity-plugin-leaflet-input'

export default {
  title: "Places",
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
      title: "Geo Location",
      type: 'geopoint',
      name: "geo",
      inputComponent: LeafletGeopointInput,
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