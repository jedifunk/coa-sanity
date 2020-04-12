import Article from 'react-icons/lib/go/repo'

export default {
  title: "Article",
  name: "article",
  icon: Article,
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
      title: "Author",
      name: "author",
      type: "reference",
      to: [{type: "author"}]
    },
    {
      title: "Location",
      name: "location",
      type: "reference",
      to: [{type: "location"}]
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{type: "category"}]
        }
      ],
      options: {
        sortable: false
      },
      preview: {
        select: {
          title: "title"
        }
      }
    },
    {
      title: "Featured Image",
      name: "featuredImage",
      type: "imageFull",
    },
    {
      title: "Custom Excerpt",
      name: "excerpt",
      type: "text",
      rows: 4
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
        {type: "imageFull"},
        {type: "gallery"},
        {type: "video"},
        {type: "googleMyMap"}
      ]
    }
  ],
  orderings: [
    {
      title: 'Post Date, New',
      name: 'postDateDesc',
      by: [
        {field: '_createdAt', direction: 'desc'}
      ]
    },
  ],
  preview: {
    select: {
      title: "title",
      featuredImage: "featuredImage",
      location: "location.name",
      excerpt: "excerpt"
    },
    prepare(selection) {
      const {title, featuredImage, location, excerpt} = selection
      return {
        title: title,
        subtitle: location,
        description: excerpt,
        media: featuredImage
      }
    }
  }
}