// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import groq  from 'groq'
import { Tweet } from '../../typing'

import sanityClient from'@sanity/client'


const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  })
type Data = {
  tweets:Tweet[],
}
const query=groq `
    *[_type=="tweet" && !blockTweet]{
         id,
         ...
    }|order(_createdAt desc)
    
  `

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(client)
  const tweets:Tweet[] = await client.fetch(query)
  console.log(tweets)
  res.status(200).json({tweets})
}
