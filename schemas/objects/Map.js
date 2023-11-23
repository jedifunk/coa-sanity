import MapPreview from '../../components/preview/MapPreview'

export default {
  title: "Google My Map",
  name: "googleMyMap",
  description: "Put your Google My Map embed code here",
  type: "object",
  fields: [
    {
      title: "Map URL",
      name: "url",
      type: "url"
    }
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  components: {
    preview: MapPreview
  }
}