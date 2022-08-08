import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/logo.png'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Receive, ReceiveDownload } from '../types'
import { db } from '../utils/firebase'
import DonationCard from '../components/DonationCard'
import AcceptCard from '../components/AcceptCard'
function MyAccount() {
  const {data:session} = useSession()
  const router = useRouter()
  const [receives,setReceives] = useState<ReceiveDownload[]>();
  const [donated,setDonated] = useState<ReceiveDownload[]>()

  useEffect(()=>{
  getReceives()
getdonated()
  },[])

  async function getReceives() {
    const receives = collection(db,'Receives');
    const q = query(receives,where('receiver_email','==', session?.user?.email))
    const donationSnapshot = await getDocs(q);
    const cityList = donationSnapshot.docs.map(doc => { 
     var data = doc.data()
     data["id"] = doc.id
     return data
   }) as ReceiveDownload[];
    setReceives(cityList);
  }
  async function getdonated() {
    const receives = collection(db,'Receives');
    const q = query(receives,where('donator_email','==', session?.user?.email))
    const donationSnapshot = await getDocs(q);
    const cityList = donationSnapshot.docs.map(doc => { 
     var data = doc.data()
     data["id"] = doc.id
     return data
   }) as ReceiveDownload[];
    setDonated(cityList);
  }
if(session){

  return (
    <div className='flex flex-col items-center'>
        <Navbar/>
        {
          session.user?.image?.toString()?
          <img src={session.user?.image?.toString()} />
        :
        null
        }
        <Image src={logo}/>
        <h1>name: {session.user?.name}</h1>
        <h1>email: {session.user?.email}</h1>
          <p className='text-2xl font-bold mt-10'>Food Accepted</p>
        <div className='flex flex-1 flex-wrap flex-row justify-center items-center'>
        {
          receives?.map((element)=>{
            return <AcceptCard receive={element} key={element.id}/>
          })
        } 
        </div>
        <p className='text-2xl font-bold mt-10'>Donated Food</p>
        <div className='flex flex-1 flex-wrap flex-row justify-center items-center'> 
        {
          donated?.map((element)=>{
            return <AcceptCard receive={element} key={element.id}/>
          })
        }
        </div>
    </div>
  )
}else{
  return<div>
    <Navbar/>
    <p>loading</p>
    </div>
}
}

export default MyAccount