import { Button, Input, TextField } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { DonationUpload } from '../types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useRouter } from 'next/router';
import logo from '../assets/logo.png';
import Image from 'next/image';
function Donate() {
  const { data: session } = useSession()
  const [startValue, setStartValue] = useState<string | null>("");
  const [expiryDate, setExpiryDate] = useState<string | null>("");
  const [name, setName] = useState<string>("");
  const [servings, setServings] = useState<number>()
  const [city, setCity] = useState<string>("")
  const [pincode, setPincode] = useState<number>()
  const [phone, setPhone] = useState<number>()
  const [description, setDescription] = useState<string>("")
  const router = useRouter()
  const handleSubmit = async () => {
    if (startValue && expiryDate && name && servings && city && pincode && phone && description) {

      const uploadData: DonationUpload = {

        city: city.toLowerCase(),
        contact: phone,
        description: description,
        expiry_date_time: expiryDate,
        made_date_time: startValue,
        name: name,
        servings: servings,
        user_name: session?.user?.name,
        pincode: pincode,
        user_email: session?.user?.email
      }

      try {
        const docRef = await addDoc(collection(db, 'Donations'), uploadData)
        alert("Submitted")
        router.replace("/")
      } catch (e) {
        alert(e)
      }
    }
    else {
      alert("All the fields are not filled. Please fill the remaining fields.")
    }
  }

  if (session) {

    return (
      <div>

        <Navbar />
        <div className='flex flex-col p-10 items-center'>
          <h1 className='text-2xl font-bold'>Wanting to donate extra food that you know will go waste?</h1>
          <div className='h-5'/>
          <TextField label="Name of the dish"
            color='secondary'

            className='w-3/4'
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <div className='h-5'/>
          
          <TextField label="Description"
            color='secondary'
            className='w-3/4'
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
          />
          <div className='h-5'/>

          <TextField label="Number of servings" type={"number"}
            color='secondary'
            className='w-3/4'
            value={servings}
            onChange={(e) => { setServings(parseInt(e.target.value)) }} />
          <div className='flex flex-1 flex-row'>

            <div className='m-5 w-3/4'>
              <p>When was it made?</p>
              <TextField type={"datetime-local"}
                color='secondary'

                value={startValue}
                onChange={(e) => { setStartValue(e.target.value) }} />
            </div>

            <div className='m-5 w-3/4'>
              <p>expiry date</p>
              <TextField
                color='secondary'

                onChange={(e) => { setExpiryDate(e.target.value) }}
                value={expiryDate}
                type={"datetime-local"}
              />
            </div>

          </div>
          <p className='text-xl font-bold'>Address</p>
          <div className='h-5'/>
          
          <TextField label='City'
            color='secondary'

            className='w-3/4'
            value={city}
            onChange={(e) => { setCity(e.target.value) }} />
          <div className='h-5'/>

          <TextField label='Pincode' type={"number"}
            color='secondary'

            className=' w-3/4'
            value={pincode}
            onChange={(e) => { setPincode(parseInt(e.target.value)) }} />
          <div className='h-5'/>
          
          <TextField label="Contact number"
            color='secondary'

            className='w-3/4'
            value={phone}
            onChange={(e) => { setPhone(parseInt(e.target.value)) }}
            type="number" />
          <div className='h-5'/>

          <Button variant='outlined' onClick={() => { handleSubmit() }} color='secondary'>Submit</Button>
          <Image src={logo}/>
        </div>

      </div>
    )
  } else {
    return <div>
      <Navbar />
      <h1>You are not logged in</h1>
    </div>
  }
}

export default Donate