export default {
  title: "Mapbox",
  name: "mapbox",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: 'Map',
      name: 'map',
      type: 'reference',
      to: [{type: 'map'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      //subtitle: 'map'
    }
  }
}