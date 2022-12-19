import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import { client,urlFor } from '../sanity'
import {Post} from "../typing"


interface  Props  {
  posts:[Post]
}
const Home: NextPage<Props> = ({posts}:Props) => {
  
  return (
    <div className="max-w-7xl mx-auto ">
      <Header/>
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0 max-auto">
        <div className='px-10 space-y-5'>
            <h1 className="text-6xl max-w-xl font-serif">
                <span className="underline decoration-black">KiaTatu</span> make a try to reach your dream
            </h1>
            <h2>
               It's free and easy to improve your japanese and find a job in our website
            </h2>
        </div>
        <div>
          <img
              className="hidden md:inline-flex h-32 lg:h-full" 
              src="https://media.istockphoto.com/id/1192780580/photo/fuji-mountain-red-maple-tree-and-fisherman-boat-with-morning-mist-in-autumn-kawaguchiko-lake.jpg?s=612x612&w=0&k=20&c=-FiZmc4qf2lVWlHf1WxysjoPJN7doER4qRmoPDLJpSw="></img>
        </div>
      </div>
    

      <div className="justify-between flex mt-5 ml-5 p-5">
          <h2 className=" text-xl font-bold">Japansese lesson and news</h2>
      </div>
      
      {/* post */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-5 md:p-6 p-10">
        
        {posts.map((post)=>(
          <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group boder rounded-xl cursor-pointer ">
                  <img
                    className=" rounded-md h-60 w-full  object-cover group-hover:scale-110 transition-transform duration-75 ease-in-out "
                    src={
                    urlFor(post.mainImage).width(500).url()
                  }/>
                  <div className="flex justify-between p-5 bg-white">
                      <div>
                          
                          <p className="text-xl font-bold">{post.title}</p>
                          <p className="font-extralight">{post.description} by {post.author.name}</p>
                      </div>

                      <img 
                          className="h-12 w-12 rounded-full"
                          src={urlFor(post.author.image).url()}
                          alt="writer's logo"/>
                  </div>
               
              </div>
          </Link>

        ))}
      </div>
      <Footer/>

    </div>
  )
}


export const getServerSideProps= async ()=>{
  const query=`*[_type == "post"]{
    _id,
    slug,
    title,
    author->{
       name,
       image
  },
  description,
  mainImage,
  
    
  }`
  const posts= await client.fetch(query)
  return {
    props:{
      posts
    }
  }
}
export default Home
