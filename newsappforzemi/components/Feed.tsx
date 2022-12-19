import React from 'react'

import { ArrowPathIcon } from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'
interface Props{
  tweets:Tweet[]
}
import { Tweet } from '../typing'
import { GetServerSideProps } from 'next'
import  TweetComponent  from './TweetComponent'
import { useSession, signIn, signOut } from "next-auth/react"

const Feed = ({tweets}:Props) => {
  const { data: session } = useSession()
    console.log(tweets)
  return (
    <div  className="col-span-7 md:col-span-5 border-y">
     {session?
        (<div className="">
            <div className="flex items-center p-2 space-between- justify-between">
                <h1 className="font-bold text-2xl text-green-700">Home</h1>
                <ArrowPathIcon className="h-5 w-5 hover:scale-125 hover:rotate-180 transition-all duration-400 ease-in-out active:scale-120 text-blue-600 cursor-pointer "/>
            </div>
    
            <div className="p-2">
              <TweetBox/>
            </div>
            <div>
                {tweets.map(tweet=>(
                  <TweetComponent tweet={tweet}/>
                
                ))}
            </div>
          </div>
        )
            :
       
        <div className="col-span-7 md:col-span-5 border-y">
          <p>Not signed in <br /></p>
          <button className="border px-4 py-1 rounded-full border-green-600" onClick={() => signIn()}>Sign in</button>
        </div>
}
    </div>
  )  
}
  


export default Feed



