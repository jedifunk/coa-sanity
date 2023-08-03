export default {
  title: 'Grid ',
  name: 'contentGrid',
  type: 'object',
  fields: [
    {
      title: 'Columns',
      name: 'columns',
      type: 'number',
      initialValue: 3,
      validation: Rule => Rule.required().min(2).max(5)
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'chart'}],
      options: {
        layout: 'grid'
      },
    },
  ],
}