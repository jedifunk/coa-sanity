import {LuSettings2 as Settings} from 'react-icons/lu'

export default (S) =>
  S.list()
  .title('Site Content')
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
        .filter(listItem => ['place', 'city', 'country', 'map'].includes(listItem.getId())),
    S.divider(),
    ...S.documentTypeListItems()
      .filter(listItem => ['category', 'author', 'placeType'].includes(listItem.getId()))
  ])