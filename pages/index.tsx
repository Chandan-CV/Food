
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {data:session} = useSession()
  return (
    <div>
      <Navbar/>
      <h1>home page</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
    )
}

export default Home
