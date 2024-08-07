import {GoRepo as Article} from 'react-icons/go'
import {TbExternalLink as External} from 'react-icons/tb'
import {MdLink as Internal} from 'react-icons/md'

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
    },
    {
      title: "Geo",
      name: "geo",
      options: {
        collapsible: true,
        collapsed: false,
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
        slugify: input => input.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Publish Date',
      name: 'publishDate',
      type: 'datetime',
    },
    {
      title: "Author",
      name: "author",
      fieldset: "details",
      type: "reference",
      to: [{type: "author"}]
    },
    {
      title: "Cities",
      name: "cities",
      fieldset: "geo",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{type: "city"}]
        }
      ],
      options: {
        sortable: false
      },
    },
    {
      title: "Countries",
      name: "countries",
      fieldset: 'geo',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{type: "country"}]
        }
      ],
      options: {
        sortable: false
      },
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
        {type: "embed"},
        {type: "googleMyMap"},
        {type: 'instagramPost'},
        {type: 'quotation'},
        {type: 'break'},
        {type: 'mapbox'},
        {type: 'chart'},
        {type: 'contentGrid'},
      ]
    }
  ],
  orderings: [
    {
      title: 'Publish Date, Newest',
      name: 'pubDateDesc',
      by: [
        {field: 'publishDate', direction: 'desc'}
      ]
    },
    {
      title: 'Publish Date, Oldest',
      name: 'pubDateAsc',
      by: [
        {field: 'publishDate', direction: 'asc'}
      ]
    },
    {
      title: 'Post Date, Newest',
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
      country: "country.name",
      excerpt: "excerpt",
      date: "publishDate",
    },
    prepare(selection) {
      const {title, featuredImage, country, date} = selection
      const pubDate = new Date(date)
      const pub = pubDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })

      return {
        title: title,
        subtitle: `Date: ${pub}`,
        description: `Location: ${country}`,
        media: featuredImage
      }
    },
  },
  initialValue: () => ({
    author: {
      _ref: "9087aa86-9534-4778-8d4a-f3744fa9b9e5",
      _type: "reference"
    },
  })
}
