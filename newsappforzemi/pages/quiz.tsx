import { StarIcon } from '@heroicons/react/24/outline'
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
    <div className="max-w-7xl mx-auto">
      <Header/>
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0 max-auto">
        <div className='px-10 space-y-5'>
            <h1 className="text-6xl max-w-xl font-serif">
                <span className="underline decoration-black">KiaTatu</span> make a try to reach your dream
            </h1>
            <h2>
               It's free and easy to find your job related to japan and practice japanese
            </h2>
        </div>
        <div>
          <img
              className="hidden md:inline-flex h-32 lg:h-full" 
              src="https://media.istockphoto.com/id/1192780580/photo/fuji-mountain-red-maple-tree-and-fisherman-boat-with-morning-mist-in-autumn-kawaguchiko-lake.jpg?s=612x612&w=0&k=20&c=-FiZmc4qf2lVWlHf1WxysjoPJN7doER4qRmoPDLJpSw="></img>
        </div>
      </div>
      <div className="bg-gradient-to-b from-pink-100 to-purple-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-pink-900 font-bold md:text-4xl">JLPT Example Test</h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">Level</h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">N1</span>
                      
                    </div>
                  </div>
                </div>
                
                
                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
                  <span className="text-white font-semibold">
                    Want to challenge?
                  </span>
                </button>
              </div>
            </div>
            <div className="relative group md:w-6/12 lg:w-7/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105" />
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz11"  className="hover:text-blue-500 border border-blue-400">JLPT N1 Test Example 1</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz12" className="hover:text-blue-500 border border-blue-400">JLPT N1 Test Example 2</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz13" className="hover:text-blue-500 border border-blue-400">JLPT N1 Test Example 3</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz14" className="hover:text-blue-500 border border-blue-400">JLPT N1 Test Example 4</Link>
                  </li>
                </ul>
                <p className="text-gray-700">The highest level in JLPT test, it's really hard but keep try, you can do it.
                </p>
                <div className="mt-6 flex justify-between gap-6">
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      <div className="bg-gradient-to-b from-pink-100 to-purple-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-pink-900 font-bold md:text-4xl">JLPT Example Test</h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">Level</h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">N2</span>
                      
                    </div>
                  </div>
                </div>
                
                
                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
                  <span className="text-white font-semibold">
                    Want to challenge?
                  </span>
                </button>
              </div>
            </div>
            
            
            
            
            <div className="relative group md:w-6/12 lg:w-7/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105" />
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz21"  className="hover:text-blue-500 border border-blue-400">JLPT N2 Test Example 1</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz22" className="hover:text-blue-500 border border-blue-400">JLPT N2 Test Example 2</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz23" className="hover:text-blue-500 border border-blue-400">JLPT N2 Test Example 3</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz24" className="hover:text-blue-500 border border-blue-400">JLPT N2 Test Example 4</Link>
                  </li>
                </ul>
                <p className="text-gray-700">Communication is not easy to be so try to practice your skill!
                </p>
                <div className="mt-6 flex justify-between gap-6">
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            
            
            
       {/* ------------------------------------------------ */}
       <div className="bg-gradient-to-b from-pink-100 to-purple-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-pink-900 font-bold md:text-4xl">JLPT Example Test</h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">Level</h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">N3</span>
                      
                    </div>
                  </div>
                </div>
                
                
                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
                  <span className="text-white font-semibold">
                    Want to challenge?
                  </span>
                </button>
              </div>
            </div>
            <div className="relative group md:w-6/12 lg:w-7/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105" />
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz31"  className="hover:text-blue-500 border border-blue-400">JLPT N3 Test Example 1</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz32" className="hover:text-blue-500 border border-blue-400">JLPT N3 Test Example 2</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz33" className="hover:text-blue-500 border border-blue-400">JLPT N3 Test Example 3</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz34" className="hover:text-blue-500 border border-blue-400">JLPT N3 Test Example 4</Link>
                  </li>
                </ul>
                <p className="text-gray-700">You are in the intermediate level of japanese. Keep going and reach the advanced level.
                </p>
                <div className="mt-6 flex justify-between gap-6">
                    <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                    <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                    <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                  
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* ------------------------------------------------ */}
       <div className="bg-gradient-to-b from-pink-100 to-purple-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-pink-900 font-bold md:text-4xl">JLPT Example Test</h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">Level</h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">N4</span>
                      
                    </div>
                  </div>
                </div>
                
                
                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
                  <span className="text-white font-semibold">
                    Want to challenge?
                  </span>
                </button>
              </div>
            </div>
            <div className="relative group md:w-6/12 lg:w-7/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105" />
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz41"  className="hover:text-blue-500 border border-blue-400">JLPT N4 Test Example 1</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz42" className="hover:text-blue-500 border border-blue-400">JLPT N4 Test Example 2</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz43" className="hover:text-blue-500 border border-blue-400">JLPT N4 Test Example 3</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz44" className="hover:text-blue-500 border border-blue-400">JLPT N4 Test Example 4</Link>
                  </li>
                </ul>
                <p className="text-gray-700">Now you can communicate with japanese but just a little bit. Keep practicing and you will reach the goal!
                </p>
                <div className="mt-6 flex justify-between gap-6">
                    <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                    <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                 
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     {/* ------------------------------------------------ */}
     <div className="bg-gradient-to-b from-pink-100 to-purple-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-pink-900 font-bold md:text-4xl">JLPT Example Test</h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">Level</h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">N5</span>
                      
                    </div>
                  </div>
                </div>
                
                
                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
                  <span className="text-white font-semibold">
                    Want to challenge?
                  </span>
                </button>
              </div>
            </div>
            <div className="relative group md:w-6/12 lg:w-7/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105" />
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz51"  className="hover:text-blue-500 border border-blue-400">JLPT N5 Test Example 1</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz52" className="hover:text-blue-500 border border-blue-400">JLPT N5 Test Example 2</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz53" className="hover:text-blue-500 border border-blue-400">JLPT N5 Test Example 3</Link>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">✓</span>
                    <Link href="./quiz54" className="hover:text-blue-500 border border-blue-400">JLPT N5 Test Example 4</Link>
                  </li>
                </ul>
                <p className="text-gray-700">Simple japanese, let's start it!
                </p>
                <div className="mt-6 flex justify-between gap-6">
                    <StarIcon className="w-16 h-16 text-yellow-400 "></StarIcon>
                 
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

        
   
      <Footer/>

    </div>
  )
}



export default Home
