// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import sanityClient from'@sanity/client'
import groq from 'groq'


const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  }
)
const commentTweetQuery =groq`
 *[_type=='tweetComment && references(*{_type=='tweet' && _id==$tweetId]._id)]{
_id,... 
}|order(_createdAt desc)
 
`
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {tweetId}=req.query
  const comments:Comment[] = await  sanityClient.fetch(commentTweetQuery,{tweetId})
  res.status(200).json({ name: 'John Doe' })
}
