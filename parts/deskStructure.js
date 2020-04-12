import S from "@sanity/desk-tool/structure-builder"
import Settings from 'react-icons/lib/go/settings'

export default () => 
  S.list()
    .title('Site Content')
    //.showIcons(false)
    .items([
      S.listItem()
        .title('Global Config')
        .icon(Settings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(listItem => ['page', 'article'].includes(listItem.getId())),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(listItem => ['author', 'location', 'category'].includes(listItem.getId()))
    ])