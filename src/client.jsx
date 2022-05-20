import sanityClient from '@sanity/client'
export default sanityClient({
  projectId: 'fxq2uth1',
  dataset: 'production',
  apiVersion: '2022-05-20',
  useCdn: true,
})
