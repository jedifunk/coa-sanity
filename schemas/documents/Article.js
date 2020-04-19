import Article from 'react-icons/lib/go/repo'
import External from 'react-icons/lib/fa/external-link'
import Internal from 'react-icons/lib/md/link'

export default {
  title: "Article",
  name: "article",
  icon: Article,
  type: "document",
  fieldsets: [
    {
      title: "Details",
      name: "details",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
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
      fieldset: "details",
      type: "reference",
      to: [{type: "author"}]
    },
    {
      title: "Location",
      name: "location",
      fieldset: 'details',
      type: "reference",
      to: [{type: "location"}]
    },
    {
      title: "Categories",
      name: "categories",
      fieldset: 'details',
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
      fieldset: "details",
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
                icon: External,
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
                icon: Internal,
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
        {type: "videoEmbed"},
        {type: "googleMyMap"},
        {type: 'instagramPost'},
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