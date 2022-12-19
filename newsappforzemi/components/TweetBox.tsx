import React, { useState } from 'react'
import { CalendarIcon, FaceFrownIcon, FlagIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { useSession, signIn, signOut } from "next-auth/react"

const TweetBox = () => {
    const [input,setInput]= useState("")
    const { data: session } = useSession()
  return (
    <div className="flex space-x-2 items-center ">
        {session?
            <img src={session.user.image}
                className="h-14 w-14 rounded-full object-cover"
                alt="avatar"
            />:
            <img src={'https://www.echigo-tsumari.jp/assets/img/global/no_artist.png'}
                className="h-14 w-14 rounded-full object-cover"
                alt="avatar"
            />
  }
        <div className="flex flex-1 items-center pl-2 ">
            <form className="mx-2">
                <input  type="text"
                        value={input}
                        placeholder='What you think today?' 
                        onChange={e=>setInput(e.target.value)}
                        className="outline-none h-20"
                />
                <div className="flex mt-2">
                    <div className="flex flex-1 space-x-3 items-center">
                        <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform hover:scale-125 duration-150 ease-in-out hover:text-green-500"/>
                        <FaceFrownIcon  className="h-5 w-5 cursor-pointer transition-transform hover:scale-125 duration-150 ease-in-out hover:text-green-500"/>
                        <CalendarIcon className="h-5 w-5  cursor-pointer transition-transform hover:scale-125 duration-150 ease-in-out hover:text-green-500"/>
                        <FlagIcon  className="h-5 w-5 cursor-pointer transition-transform hover:scale-125 duration-150 ease-in-out hover:text-green-500"/>
                    </div>
                    <button disabled={!input} className="bg-green-500 rounded-xl px-3 text-white disabled:opacity-50">Send</button>
                </div>
              
            </form>
        </div>

    </div>
  )
}

export default TweetBox