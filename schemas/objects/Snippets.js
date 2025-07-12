export default {
  title: 'Snippets',
  name: 'snippets',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Snippet Count',
      name: 'count',
      type: 'string',
      options: {
        list: [
          {title: '5', value: 'five'}, 
          {title: '10', value: 'ten'},
          {title: 'All', value: 'all'}
        ]
      },
      initialValue: 'all',
    }
  ]
}