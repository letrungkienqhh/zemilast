// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from'@sanity/client'


const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  })
export default async function  createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
        const {_id,name,email,comment}= JSON.parse(req.body)
        try{
            await client.create({
                _type:'comment',
                post:{
                    _type:'reference',
                    _ref:_id
                },
                name,
                email,
                comment
            })
        }
        catch (err){
            console.log('Error')
            return res.status(500).json({message:`Could not submit comment`,err})
        }
        console.log('submited comment')
        return res.status(200).json({ message:"Submit comment successfully"})
}
