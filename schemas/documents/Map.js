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
      title: 'Data Attribute',
      name: 'mapAttr',
      type: 'string',
    },
    {
      title: 'Custom Query',
      name: 'customQuery',
      type: 'string',
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
      name: 'hasToggles',
      type: 'boolean',
      description: 'Include filter buttons?',
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
    },
  ],
}