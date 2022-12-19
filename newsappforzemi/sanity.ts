import sanityClient from'@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const client = sanityClient({
  projectId: 'lnoo14o5',
  dataset:'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
export {client,urlFor}