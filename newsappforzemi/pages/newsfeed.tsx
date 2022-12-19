import { GetServerSideProps } from 'next'
import React from 'react'
import Feed from '../components/Feed'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import Widget from '../components/Widget'
import { Tweet } from '../typing'


import fetchTweets from '../ultis/fetchTweets'
interface Props{
  tweets:Tweet[]
}
const newsfeed = ({tweets}:Props) => {
  console.log(tweets)
  return (
    <div>
        <Header/>
        <div className="grid grid-cols-9  mx-auto lg:max-w-7xl shadow-lg max-h-screen ">
            <SideBar/>
            <Feed tweets={tweets}/>
            <Widget/>
        </div>
    </div>
  )
}

export default newsfeed

export const getServerSideProps:GetServerSideProps =async(context)=>{
  const tweets= await fetchTweets();
  return {
    props:{
      tweets, 
    }
  }
}

