import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './structure'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify"

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
    dashboardTool({
      widgets: [
        projectInfoWidget(), 
        projectUsersWidget(),
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Astro FrontEnd',
              apiId: 'd5ace7ff-4f90-445a-aa41-c6b30f4fbb7c',
              buildHookId: '63b2b463d043e642e11330be',
              name: 'moonlit-rabanadas-b38d49',
              //url: 'https://my-sanity-deployment.com'
            },
          ]
      })
      ]
    }),
    ...(isDev ? devOnlyPlugins : [])
  ],
  schema: {
    types: schemas,
  },
})