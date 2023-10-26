import {FaRegMap as MapIcon} from 'react-icons/fa6'

export default {
  title: 'Map',
  name: 'map',
  icon: MapIcon,
  type: 'document',
  fields: [
    {
      title: 'Map Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Custom Map',
      name: 'customMap',
      description: 'Does this map need custom code?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      title: 'Layers',
      name: 'layers',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {
            title: 'Countries',
            value: 'countries'
          },
          {
            title: 'Cities',
            value: 'cities'
          },
          {
            title: 'Places',
            value: 'places'
          }
        ]
      }
    },
    {
      title: 'Query All',
      name: 'queryAll',
      description: 'Get all countries, cities and places',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      title: 'Initial Zoom',
      name: 'zoomTo',
      description: 'Set initial zoom?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      title: 'Location',
      name: 'location',
      description: 'Add places to the map',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'place'}]
      }],
      hidden: ({document}) => document?.customMap == true,
    },
    {
      title: 'Data Attribute',
      name: 'mapAttr',
      type: 'string',
      hidden: ({document}) => document?.customMap !== true,
    },
  ]
}