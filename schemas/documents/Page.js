import Page from 'react-icons/lib/go/file-text'

export default {
  title: "Page",
  name: "page",
  icon: Page,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Featured Image",
      name: "featuredImage",
      type: "imageFull"
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean'
                  }
                ]
              },
              {
                title: "Internal Link",
                name: "internalLink",
                type: "object",
                fields: [
                  {
                    title: "Reference",
                    name: "reference",
                    type: "reference",
                    to: [{type: "article"}]
                  }
                ]
              }
            ]
          }
        },
        {type: "image"},
        {type: "gallery"}
      ]
    }
  ]
}