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
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
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
              apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID,
              buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_ID,
              name: process.env.SANITY_STUDIO_NETLIFY_NAME,
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