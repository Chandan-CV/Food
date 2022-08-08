import { Button } from '@mui/material';
import { addDoc, collection, deleteDoc, doc, DocumentData, getDoc, getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { DonationDownload, Receive } from '../../types';
import { db } from '../../utils/firebase';
import logo from '../../assets/logo.png'
import Image from 'next/image';
function SpecificDonation() {
  const { data: session } = useSession()
  const router = useRouter()
  const donation_id: string = router.query.id ? router.query.id.toString() : "";
  const [donationData, setDonationData] = useState<DonationDownload>()
  useEffect(() => {
    getDonationData()
  }, [])

  async function handleAccept() {
    if (donationData) {

      const uploadData: Receive =
      {
        city: donationData?.city,
        description: donationData.description,
        donator_email: donationData.user_email,
        donator_name: donationData.user_name,
        expiry_date_time: donationData.expiry_date_time,
        made_date_time: donationData.made_date_time,
        name: donationData.name,
        pincode: donationData.pincode,
        receiver_email: session?.user?.email,
        receiver_name: session?.user?.name,
        servings: donationData.servings,
        donator_phone:donationData.contact

      }
      const collectionRef = collection(db, 'Receives')
      try {
        await addDoc(collectionRef, uploadData)
        await deleteDoc(doc(db, "Donations", donation_id))
        alert("done submitting")
        router.replace("/Accept")
      } catch (e) {
        alert(e)
      }
    }
  }
  async function getDonationData() {
    const docref = doc(db, 'Donations', donation_id);
    const donationSnapshot = await getDoc(docref);
    const temp = donationSnapshot.data() as DonationDownload
    setDonationData(temp)
  }
  if (donationData) {

    return (
      <div>
        <Navbar />
        <div className='bg-red-500 h-full flex flex-1 justify-center items-center p-10 ' >

          <div className='p-10 rounded bg-white w-fit border-solid border self-center flex  justify-center flex-col'>
            <h1 className='text-4xl mb-5'>Food Donation</h1>
            <h1 className='mb-5'>Name: {donationData?.name}</h1>
            <h1 className='mb-5'>Description: {donationData?.description}</h1>
            <h1 className='mb-5'><strong>Made on </strong>{donationData.made_date_time?.split("T")[0]}<strong> at </strong>{donationData.made_date_time?.split("T")[1]} </h1>
            <h1 className='mb-5'><strong>approx expiry on </strong>{donationData.expiry_date_time?.split("T")[0]}<strong> at </strong>{donationData.expiry_date_time?.split("T")[1]} </h1>
            <h1 className='mb-5'>Servings: feeds <strong>{donationData.servings}</strong> people</h1>
            <h1 className='mb-5'>phone: {donationData.contact}</h1>
            <h1 className='mb-5'>email: {donationData.user_email}</h1>
            <p className='mb-5'>my city: {donationData.city}</p>
            <p className='mb-5'>my pincode: {donationData.pincode}</p>
            <Button onClick={() => { handleAccept() }} variant="outlined" color='secondary'>Accept it</Button>
          <Image src={logo}/>
          </div>
        </div>
      </div>
    )
  } else {
    return <div>
      <Navbar />
      <h1>loading</h1>
    </div>
  }
}

export default SpecificDonation