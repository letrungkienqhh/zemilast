import React from 'react'
import { Tweet } from '../typing'

import TimeAgo from 'react-timeago'
import { ArrowsUpDownIcon, ArrowUpTrayIcon, ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline'
interface Props{
    tweet:Tweet,
}
export const TweetComponent = ({tweet}:Props) => {
  return (
    <div className="mx-2 space-x-3 border-2 rounded-lg p-1 border-green-300">
        
        <div className="flex">
            <img className="rounded-full h-10 w-10 ml-2" src={tweet.profileImage}></img>
            <div className=" mr-2 p-2 items-center space-x-2 ">
                
                <div className="flex items-center space-x-2">
                    <p className="font-bold text-xl">{tweet.userName}</p>
                    <TimeAgo date={tweet._createdAt} className="text-gray-500 text-xs"/>
                </div>
            
                <p className="ml-3 max-w-screen rounded-md">{tweet.text}</p>
                {tweet.image &&(
                    <img src={tweet.image}
                        alt="image"
                        className="m-6 max-w-30 rounded-lg shadow-md object-cover"
                    />
                    
                )}
            </div>
            
        </div>
        <div className="flex mt-3 justify-between px-10  ">
            <div className="flex items-center space-x-2">
                <ChatBubbleLeftIcon className="h-4 w-4 cursor-pointer text-gray-500  transition-transform hover:scale-125 duration-150 ease-in-out hover:text-green-500" />
                <p className="text-sm text-gray-500">5</p>
            </div>
            <div>
                <ArrowsUpDownIcon className="h-4 w-4 cursor-pointer text-gray-500 transition-transform hover:scale-125 duration-150 ease-in-out hover:text-green-500"/>
            </div>
            <div>
                <HeartIcon className="h-4 w-4 cursor-pointer text-gray-500 transition-transform hover:scale-125 duration-150 ease-in-out hover:text-red-600"/>
            </div>
            <div>
                <ArrowUpTrayIcon  className="h-4 w-4 cursor-pointer text-gray-500 transition-transform hover:scale-125 duration-150 ease-in-out hover:text-green-500"/>
            </div>
        </div>
       
        
    </div>
  )
}

export default TweetComponent