import React from 'react'
import { SVGProps } from 'react'
interface Props{
    Icon:(props: SVGProps<SVGSVGElement>)=>JSX.Element,
    title:string,
}
export const SidebarRow = ({Icon,title}:Props) => {
  return (
    <div className=" group flex max-w-fit items-center p-2 m-2 space-x-2 rounded-full  transition-all duration-200 hover:bg-gray-100 hover:text-green-400">
        <Icon className="h-6 w-6 md:h-4 md:w-4  "></Icon>
       <p className="group-hover:text-green-400 hidden md:inline-flex">{title}</p>
    </div>
  )
}
