import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
export const Header = () => {
    const { data: session } = useSession()

  return (
    <div className="flex justify-between p-5 max-w-7xl mx-auto from-red-100 via-red-300 to-blue-500 bg-gradient-to-br">
        <div className="flex items-center space-x-5">
            <Link href='/'>
                <img 
                    className="w-44 object-contain cursor-pointer rounded-xl"
                    src={"./favicon.png"} 
                    alt="KiaTatu">
                </img>

            </Link>
            
            <div className="hidden md:inline-flex items-center space-x-5 ">   
                <Link href='/'>
                    <a className="text-white bg-green-600 px-4 rounded-full py-1">
                        Read News
                    </a>
                </Link>
               
                {/* <Link href='/newsfeed'>
                    <a className="text-white bg-green-600 px-4 rounded-full py-1">
                        NewsFeed
                    </a>
                </Link> */}
                <Link href='/quiz'>
                    <a className="text-white bg-green-600 px-4 rounded-full py-1">Japanese Test</a>
                </Link>
               
                
            </div>
        </div>
        <div className="flex items-center space-x-5 text-white">
            {session? <>
                     {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                    </>:
                     <>
                        Not signed in <br />
                        <button className="border px-4 py-1 rounded-full border-green-600" onClick={() => signIn()}>Sign in</button>
                    </>
            }
            
        </div>
    </div>
       
    
  )
}

