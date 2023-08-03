import Quotation from "../../previews/QuotePreview";

export default {
  title: 'Quotation',
  name: 'quotation',
  type: 'object',
  preview: {
    select: {
      quote: 'quote',
      author: 'author'
    }
  },
  components: {
    preview: Quotation
  },
  fields: [
    {
      title: 'Quote',
      name: 'quote',
      type: 'text'
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string'
    },
    {
      title: 'Source',
      name: 'source',
      type: 'string'
    },
    {
      title: 'Link',
      name: 'url',
      type: 'url'
    }
  ]
}