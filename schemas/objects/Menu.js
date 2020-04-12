export default {
  title: 'Menu',
  name: 'menu',
  type: 'object',
  fields: [
    {
      name: 'menuItems',
      type: 'array',
      of: [{type: 'menuItem'}]
    }
  ]
}