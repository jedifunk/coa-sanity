import {GoFile as Page} from 'react-icons/go'
import {TbExternalLink as External} from 'react-icons/tb'
import {MdLink as Internal} from 'react-icons/md'

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
      title: 'Sidebar',
      name: 'sidebar',
      type: 'boolean',
      initialValue: true,
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
                type: "object",
                icon: Internal,
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
        {type: "mapbox"},
        {type: "break"},
        {type: "embed"},
        {type: "video"},
        {type: "chart"},
        {type: "quotation"},
      ]
    }
  ]
}