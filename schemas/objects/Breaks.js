import BreakPreview from '../../components/preview/BreakPreview'

export default {
  title: 'Break',
  name: 'break',
  type: 'object',
  fields: [
    {
      title: 'HR',
      name: 'horizontal',
      type: 'string',
      options: {
        list: [
          {title: 'Full Break', value: 'break'}, 
          {title: 'Half Break', value: 'small break'}
        ]
      },
      initialValue: 'break',
    }
  ],
  preview: {
    select: {horizontal: 'horizontal'},
  },
  components: {
    preview: BreakPreview
  }
}