import { useRouter } from 'next/router'
import React from 'react'
import { DonationDownload, DonationUpload } from '../types'

interface Props{
  donation:DonationDownload
  
}
function DonationCard({donation}:Props) {
  const router = useRouter()
  return (
    <div className='p-5 bg-gray-300 max-w-xs m-5 rounded cursor-pointer' onClick={()=>router.push(`/donation/${donation.id}`)}> 
        <h1 className='text-2xl font-bold'>{donation.name}</h1>
        <h1>{`by ${donation.user_name}`}</h1>
        <h1>{`servings: feeds ${donation.servings} people`}</h1>
        <h1>date prepared:{` ${donation.made_date_time?.split("T")[0]}`}</h1>
        <h1>{`time prepared: ${donation.made_date_time?.split("T")[1]}`}</h1> 
        <h1>expiry date:{` ${donation.expiry_date_time?.split("T")[0]}`}</h1>
        <h1>{`approx time: ${donation.expiry_date_time?.split("T")[1]}`}</h1>
    </div>
  )
}

export default DonationCard