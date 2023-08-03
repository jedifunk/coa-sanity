import React from 'react'
//import client from 'part:@sanity/base/client'
import {useClient} from 'sanity'
import urlBuilder from '@sanity/image-url'

const client = useClient()
const urlFor = source => urlBuilder(client).image(source)

const imagePreview = ({ value }) => {
  console.log(value)
  return (
    <></>
    // <div>
    //   <figure key={value._key}>
    //     <img src={urlFor(value.imageUrl).width(400).url()} />
    //     <figcaption>{value.title}</figcaption>
    //   </figure>
    // </div>
  )
}

export default imagePreview