
import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import logo from '../assets/logo.png';
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <div>
      <Navbar />
        <div>
      <div className='mt-10 ml-10'>

        <div className='flex flex-row flex-1'>
          <div>

            <h1 className='font-Goblin text-6xl'>ANNA</h1>
            <div className='h-4' />
            <h1 className='font-Goblin text-6xl'>BRAHMA</h1>
          </div>
              <Image src={logo}/>
              <div className='w-auto ml-52 mr-10'>
              <h1 className='text-xl text-right justify-self-end font-light'>Let us together, Bridge the gap between the Fortunate and the Needy</h1>
               </div>
        </div>
        <p className='font-light text-2xl '>Feed your soul, Feed someone</p>
      {
        session?<div className='h-40'/>:
        <div className='m-10'> 
        <Button color='secondary' variant='outlined' size='large' onClick={()=>{signIn()}}>Login!</Button>
         </div>
      }
      </div>
      <div className='bg-gray-300 p-10 flex flex-row justify-evenly text-xl'>
      <div className='bg-red-500 w-fit pt-5 pb-5 pl-10 pr-10 cursor-pointer rounded' onClick={()=>{router.push('/Aboutus')}}>
          About us
        </div> 
        <div className='bg-red-500 w-fit pt-5 pb-5 pl-10 pr-10 cursor-pointer rounded' onClick={()=>{router.push('/Donate')}}>
          Donate Food
        </div> 
        <div className='bg-red-500 w-fit pt-5 pb-5 pl-10 pr-10 cursor-pointer rounded' onClick={()=>{router.push('/Accept')}}>
          Find Donations
        </div>
      </div>
      </div>

    </div>
  )
}

export default Home
