import { Button, TextField } from '@mui/material'
import { collection, doc, DocumentData, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import DonationCard from '../components/DonationCard'
import Navbar from '../components/Navbar'
import { DonationDownload, DonationUpload } from '../types'
import { db } from '../utils/firebase'
function Accept() {
  const [data, setData] = useState<DonationDownload[]>()
  const [city, setCity] = useState("")

  async function getData() {
    const donations = collection(db, 'Donations');
    const q = query(donations,where('city','==',city))
    const donationSnapshot = await getDocs(q);
    const cityList = donationSnapshot.docs.map(doc => {
      var data = doc.data()
      data["id"] = doc.id
      return data
    }) as DonationDownload[];
    setData(cityList);
  }
  return (
    <div>
      <Navbar />
<div className='p-10'>

      <h1 className='text-3xl'>Looking for donated food?</h1>
      <div className='mt-10 flex flex-1'>
        <TextField label="enter city" color='secondary'  type={"search"}value={city} onChange={(e)=>{setCity(e.target.value.toLowerCase())}} />
        <Button color='secondary' onClick={()=>{getData()}}>search</Button>
      </div>
      <div className='flex flex-1 flex-row flex-wrap`'>
        {data?.map((donation) => {
          return <DonationCard donation={donation} key={donation.id} />
        })}
      </div>
    </div>
        </div>
  )
}

export default Accept