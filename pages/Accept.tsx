import { collection, DocumentData, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import DonationCard from '../components/DonationCard'
import Navbar from '../components/Navbar'
import {donations} from '../dev-libs/donations'
import { db } from '../utils/firebase'
function Accept() {
const[data, setData] = useState<DocumentData[]>()

useEffect(()=>{
  getData()
},[])

async function getData() {
   const donations = collection(db,'Donations');
   const donationSnapshot = await getDocs(donations);
   const cityList = donationSnapshot.docs.map(doc => doc.data());
   setData(cityList);
}
  return (
    <div>
        <Navbar/>
        <h1>
          {JSON.stringify(donations)}
        </h1>
          <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Accept