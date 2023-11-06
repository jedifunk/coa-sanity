export default {
  title: "Mapbox",
  name: "mapbox",
  type: "object",
  fields: [
    {
      title: 'Map',
      name: 'map',
      type: 'reference',
      to: [{type: 'map'}]
    },
  ],
  preview: {
    select: {
      title: 'map.name',
    }
  }
}