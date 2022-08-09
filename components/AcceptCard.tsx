import { useRouter } from 'next/router'
import React from 'react'
import { DonationDownload, DonationUpload, ReceiveDownload } from '../types'

interface Props{
  receive:ReceiveDownload
  
}
function AcceptCard({receive}:Props) {
  const router = useRouter()
  return (
    <div className='p-5 bg-gray-300 max-w-fit m-5 rounded cursor-pointer' onClick={()=>router.push(`/acceptances/${receive.id}`)}> 
        <h1 className='text-2xl font-bold'>{receive.name}</h1>
        <h1>{`donated by ${receive.donator_name}`}</h1>
        <h1>{`accepted by ${receive.receiver_name}`}</h1>
        <h1>{`acceptor contact: ${receive.receiver_email}`}</h1>
        <h1>{`donator contact: ${receive.donator_email}`}</h1>
        <h1>{`servings: feeds ${receive.servings} people`}</h1>
        <h1>Date prepared:{` ${receive.made_date_time?.split("T")[0]}`}</h1>
        <h1>{`time prepared: ${receive.made_date_time?.split("T")[1]}`}</h1> 
        <h1>Expiry date:{` ${receive.expiry_date_time?.split("T")[0]}`}</h1>
        <h1>{`approx time: ${receive.expiry_date_time?.split("T")[1]}`}</h1>
    </div>
  )
}

export default AcceptCard