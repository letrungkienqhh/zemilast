import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { SidebarRow } from './SidebarRow'
import {ArrowRightOnRectangleIcon, ArrowTopRightOnSquareIcon, BellAlertIcon, ChatBubbleBottomCenterIcon, EllipsisHorizontalCircleIcon, HashtagIcon, HomeIcon, UserCircleIcon} from '@heroicons/react/24/outline'
export const SideBar = () => {
    const { data: session } = useSession()
    
  return (
    <div className="max-w-xl col-span-2 mx-auto md:inline-block">
        
        <SidebarRow Icon={HomeIcon} title="Home"/>
        {session? <>
                     
                    <div>
                        <SidebarRow Icon={UserCircleIcon} title={session.user.name}/>
                    </div>
                    </>:
                    <div onClick={()=>signIn()}>
                        <SidebarRow Icon={ArrowTopRightOnSquareIcon} title="Sign In"/>
                    </div>
                    
            }
            {session &&
                    (<div onClick={()=>signOut()}>
                        <SidebarRow Icon={ArrowRightOnRectangleIcon} title="Sign out"/>
                    </div>)
        }
            <SidebarRow Icon={HashtagIcon} title="Find"/>
            <SidebarRow Icon={BellAlertIcon} title="Notification"/>
            <SidebarRow Icon={ChatBubbleBottomCenterIcon} title="Message"/>
            <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More"/>
            <SidebarRow Icon={HashtagIcon} title="Find"/>
        

    </div>
  )
}
