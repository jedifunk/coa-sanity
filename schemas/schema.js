// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents Types
import globalConfig from './documents/SiteSettings'
import page from './documents/Page'
import article from './documents/Article'
import author from './documents/Author'
import location from './documents/Location'
import category from './documents/Category'

// Objects
import imageFull from './objects/ImageFull'
import gallery from './objects/Gallery'
import video from './objects/Video'
import googleMyMap from './objects/Map'
import menu from './objects/Menu'
import menuItem from './objects/MenuItem'
import igEmbed from './objects/InstagramEmbed'
import videoEmbed from './objects/VideoEmbed'

// Components


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    globalConfig,
    page,
    article,
    author,
    location,
    category,
    imageFull,
    gallery,
    video,
    videoEmbed,
    googleMyMap,
    menu,
    menuItem,
    igEmbed,
  ])
})
