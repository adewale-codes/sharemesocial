import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { version } from 'react'

export const client = sanityClient({
    projectId: process.eventNames.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-11-8',
    useCdn: true,
    token: process.eventNames.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)