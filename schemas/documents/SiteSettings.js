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
      title: 'Title Template',
      name: 'titleTemplate',
      type: 'string'
    },
    {
      title: "Site URL",
      name: 'siteUrl',
      type: 'url'
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
      title: "Twitter Handle",
      name: 'twitterHandle',
      type: 'string'
    },
    {
      title: "Site Navigation",
      name: "siteNav",
      type: 'menu'
    }
  ]
}