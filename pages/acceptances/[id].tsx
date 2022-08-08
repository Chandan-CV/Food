import { Button } from '@mui/material';
import { addDoc, collection, deleteDoc, doc, DocumentData, getDoc, getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { DonationDownload, Receive, ReceiveDownload } from '../../types';
import { db } from '../../utils/firebase';
import logo from '../../assets/logo.png'
import Image from 'next/image';
function SpecificAcceptance() {
  const {data:session} = useSession()
  const router = useRouter()
  const receive_id: string = router.query.id ? router.query.id.toString() : "";
  console.log(receive_id)
  const [receives, setReceivesData] = useState<ReceiveDownload>()
  useEffect(() => {
    getDonationData()
  }, [])

async function getDonationData() {
    const docref = doc(db, 'Receives', receive_id);
    const donationSnapshot = await getDoc(docref);
    const temp = donationSnapshot.data() as ReceiveDownload
    setReceivesData(temp)
  }
  if(receives){

    return (
        <div>
        <Navbar />
        <div className='bg-red-500 h-full flex flex-1 justify-center items-center p-10 ' >

          <div className='p-10 rounded bg-white w-fit border-solid border self-center flex  justify-center flex-col'>
            <h1 className='text-4xl mb-5'>Food Donation</h1>
            <h1 className='mb-5'>Name: {receives?.name}</h1>
            <h1 className='mb-5'>Description: {receives?.description}</h1>
            <h1 className='mb-5'><strong>Made on </strong>{receives.made_date_time?.split("T")[0]}<strong> at </strong>{receives.made_date_time?.split("T")[1]} </h1>
            <h1 className='mb-5'><strong>approx expiry on </strong>{receives.expiry_date_time?.split("T")[0]}<strong> at </strong>{receives.expiry_date_time?.split("T")[1]} </h1>
            <h1 className='mb-5'>Servings: feeds <strong>{receives.servings}</strong> people</h1>
            <h1 className='mb-5'>email: {receives.receiver_email}</h1>
            <p className='mb-5'>my city: {receives.city}</p>
            <p className='mb-5'>my pincode: {receives.pincode}</p>
          <Image src={logo}/>
          </div>
        </div>
      </div>
  )
}else{
  return <div>
    <Navbar/>
    <h1>loading</h1>
  </div>
}
}

export default SpecificAcceptance