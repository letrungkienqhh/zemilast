import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
const Widget = () => {
  const [value,setValue]=useState("nhk_news")
  return (
    <div className="hidden md:inline-grid boder shadow-sm m-2 p-2 md:col-span-2 justify-center">
        <div className="items-center flex mt-2 rounded-full space-x-2">
            <input onChange={e=>setValue(e.target.value)} type="text" placeholder='Type something...' className="border-collapse outline-none bg-transparent"></input>
            <MagnifyingGlassIcon className="h-4 w-4 items-center text-gray-500"/>
            
        </div>
        <div>
            <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={value}
                    options={{height: 800}}
            />
        </div>
    </div>
  )
}

export default Widget