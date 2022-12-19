import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { client, urlFor } from '../../sanity'
import sanityClient from'@sanity/client'
import { Post } from '../../typing'
import PortableText from "react-portable-text"
import Link from 'next/link'
import {useForm,SubmitHandler} from 'react-hook-form'
interface IFormInput{
    _id?:string;
    name:string;
    email:string;
    comment:string;
}
interface Props{
    post:Post;
}

const Post = ({post}:Props) => {
    console.log(post)
   const {register,handleSubmit, formState:{errors}} = useForm<IFormInput>();
   const [submited,setSubmited]= useState(false)
   const onSubmit:SubmitHandler<IFormInput> = async(data)=>{
        fetch("/api/createComment",{
            method:'POST',
            body:JSON.stringify(data)
        }).
        then(()=>{
            console.log(data)
             setSubmited(true)
        }
        )
        .catch(error=>{
            console.log(error)
            setSubmited(false)
       })
   }
  return (
    <div>
        <Header/>
        { post.mainImage && 
            <img 
            className="w-full h-40 object-cover"
            src={urlFor(post.mainImage).width(500).url()}
            alt=""
            />
        
        }
       <article className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
            <h2 className="text-xl font-light text-gray-500">{post.description}</h2>
            <div className="flex space-x-3 items-center m-3">
                <img className="h-10 w-10 rounded-full"
                     src={urlFor(post.author.image).url()}
                />
                <p className="font-extralight text-sm">
                        Blog post by {post.author.name} - Published at {" "} {new Date(post._createdAt).toLocaleString()}

                </p>

                
            </div>
            <div>
                <PortableText 
                    className=""
                    content={post.body}
                    dataset={"production"}
                    projectId={"lnoo14o5"}       
                    serializers={{
                        h1: (props:any) => <h1 className="text-2xl font-bold my-5" {...props} />,
                        h2: (props:any) => <h1 className="text-xl font-bold my-5" {...props} />,
                        li: ({ children }:any) => <li className="ml-4 list-disc">{children}</li>,
                        link:({href,children}:any)=><Link href={href} className="text-blue-500 hover:underline">{children}</Link>,
                        
                    }}
                >
                </PortableText>
            </div>
          
       </article>
       <div className="max-w-3xl mx-auto p-5">
                    <h3 className="font-bold text-blue-500 text-3xl">Comment</h3>
                    <hr/>
                    {post.comments && (
                        post.comments.map(comment=>(
                            <div className="flex space-x-3 ">
                                <p className="font-bold  p-2">{comment.name}:    </p>
                                <p className="text-center p-2">{comment.comment}</p>
                                <p></p>
                            </div>
                        ))
                    )}
       </div>
        {
            submited?
                <div className="flex flex-col py-10 my-10 bg-yellow-500 text-white text-center max-w-2xl mx-auto">
                    <h3>Thank you for submitting your comment</h3>
                    <p>The comment will be showed until approval accepted</p>
                </div>

            :
            <form className="flex flex-col mb-10  max-w-2xl mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
            >
                     <hr className="font-bold text"></hr> 
                    <h1 className="text-2xl font-bold text-blue-500 my-3">
                        Leave comment below
                    </h1>
                        <input {...register("_id")}
                                type="hidden"
                                name="_id"
                                value={post._id}>

                        </input>
                    <label className="block mb-5">
                        <span className="text-gray-700">Name</span>
                        <input 
                                {...register("name",{required:true})}
                               
                                className="border shadow py-2 px-3 rounded-lg form-input mt-1  block w-full ring-yellow-300 outline-none focus:ring"
                                type="text" 
                                placeholder="Your name" 
                        />        
                            
                       
                    </label>
                    <label className="block mb-5">
                        <span className="text-gray-700">Email</span>
                        <input  
                                className="border shadow py-2 px-3 rounded-lg form-input mt-1  block w-full ring-yellow-300 outline-none focus:ring"
                                type="text" 
                                placeholder="Your email" 
                                {...register("email",{required:true})}
                        />
                    </label>
                    <label className="block mb-5">
                        <span className="text-gray-700">Comment</span>
                        <textarea  
                             {...register("comment",{required:true})}
                            className=" border shadow py-2 px-3 form-textarea rounded-lg mt-1 block w-full 
                                    ring-yellow-300 outline-none focus:ring"
                            placeholder="your comment" rows={10}>
                            
                        </textarea>
                    </label>
                    {/* error */}
                    <div className="flex flex-col p-3">
                        {errors.name && (
                            <span className="text-red-600 font-semibold">-The name field is required!!</span>
                        )}
                         {errors.email && (
                            <span className="text-red-600 font-semibold">-The email field is required!!</span>
                        )}
                         {errors.comment && (
                            <span className="text-red-600 font-semibold">-The comment field is required!!</span>
                        )}
                    </div>
                    <input  type="submit"
                            
                            className="shadow bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-one text-white font-bold px-4 rounded cursor-pointer"
                    >   
                    
                    
                    </input>
            </form>    
      
     }
    </div>
  )}
  


export const getStaticPaths= async()=>{
    const queryPosts=`*[_type == "post"]{
        _id,
        slug{
            current,
          }
      }`
     
    const posts= await client.fetch(queryPosts);
  
    const paths=posts.map((post:Post)=>({
        params:{
            slug:post.slug.current
        }
    })
    )
  
    
    return {
        paths,
        fallback:"blocking"
    }

}
export const getStaticProps:GetStaticProps = async ({params})=>{
    const query=`*[_type == "post" && slug.current==$slug][0]{
        _id,
        _createdAt,
        title,
        author->{
           name,
           image,
        },
       'comments':*[    
         _type=='comment' &&
         post._ref==^._id &&
         approved==true
       ],
        description, 
         mainImage,
         body,
         slug,
      }`
      const post=await client.fetch(query,{slug:params?.slug})
      
      if (!post){
        return{
            notFount:true
        }
      }
      return {
        props:{
            post,
        },
        revalidate:10
      }

}
export default Post;

