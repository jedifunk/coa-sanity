export default {
  title: "Site Config",
  name: "siteSettings",
  type: "document",
  fields: [
    {
      title: "Site Title",
      name: "siteTitle",
      type: "string"
    },
    {
      title: "Homepage Hero",
      name: "hpHero",
      type: "imageFull"
    },
    {
      title: "Meta Description",
      name: "metaDescription",
      type: "text"
    },
    {
      title: "Site Navigation",
      name: "siteNav",
      type: 'menu'
    }
  ]
}