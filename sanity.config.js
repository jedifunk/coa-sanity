import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './structure'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'coa-sanity',
  title: 'Choosing Our Adventure',
  projectId: '8icb2evz',
  dataset: 'production',
  plugins: [
    deskTool({structure: deskStructure}),
    media(),
    unsplashImageAsset(),
    dashboardTool({widgets: [projectInfoWidget(), projectUsersWidget(),]}),
    ...(isDev ? devOnlyPlugins : [])
  ],
  schema: {
    types: schemas,
  },
})