import { collection, doc, DocumentData, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import DonationCard from '../components/DonationCard'
import Navbar from '../components/Navbar'
import { DonationDownload, DonationUpload } from '../types'
import { db } from '../utils/firebase'
function Accept() {
const[data, setData] = useState<DonationDownload[]>()

useEffect(()=>{
  getData()
},[])

async function getData() {
   const donations = collection(db,'Donations');
   const donationSnapshot = await getDocs(donations);
   const cityList = donationSnapshot.docs.map(doc => { 
    var data = doc.data()
    data["id"] = doc.id
    return data
  }) as DonationDownload[];
   setData(cityList);
}
  return (
    <div>
        <Navbar/>
        <h1>Looking for food for your charity or NGO?</h1>
        <div className='flex flex-1 flex-row flex-wrap`'>

          {data?.map((donation)=>{
            return <DonationCard donation={donation} key={donation.id}/>
          })}
          </div>
    </div>
  )
}

export default Accept