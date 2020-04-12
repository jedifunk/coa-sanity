export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{type: 'article'}, {type: 'page'}]
    },
    {
      title: 'Custom URL',
      name: 'customUrl',
      type: 'string'
    }
  ]
}