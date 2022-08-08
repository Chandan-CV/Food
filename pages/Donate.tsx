import { Button, Input, TextField } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DonationUpload } from '../types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useRouter } from 'next/router';

function Donate() {
  const { data: session } = useSession()
  const [startValue, setStartValue] = useState<string|null>("");
  const [expiryDate, setExpiryDate] = useState<string|null>("");
  const [name, setName] = useState<string>("");
  const [servings, setServings] = useState<number>()
  const [city, setCity] = useState<string>("")
  const [pincode, setPincode] = useState<number>()
  const [phone, setPhone] = useState<number>()
const [description,setDescription] = useState<string>("")
const router = useRouter()
  const handleSubmit = async()=>{
    const uploadData:DonationUpload = {
      city:city,
      contact:phone,
      description:description,
      expiry_date_time:expiryDate,
      made_date_time:startValue,
      name:name,
      servings:servings,
      user_name: session?.user?.name,
      pincode: pincode,
      user_email:session?.user?.email
    }

    try{
      const docRef = await addDoc(collection(db,'Donations'),uploadData)
      alert("done submitting")
      router.replace("/")
    }catch(e){
        alert(e)
    }
  }

  if (session) {

    return (
      <div>

        <Navbar />
        <div className='flex flex-col p-10 items-center'>
          <h1 className='text-2xl font-bold'>Wanting to donate extra food that you know will go waste?</h1>
          <TextField label="name of the dish"
            className='m-5 w-3/4'
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          /> 
          <TextField label="Description"
          className='m-5 w-3/4'
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}
        />
          <TextField label="number of servings" type={"number"}
            className='m-5 w-3/4'
            value={servings}
            onChange={(e) => { setServings(parseInt(e.target.value)) }} />
          <div className='m-5 w-3/4'>

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                onChange={(value) => { setStartValue(value) }}
                renderInput={(params) => <TextField {...params} />}
                label="when was it made?"
                value={startValue}
              />
            </LocalizationProvider> */}
            <p>when was it made?</p>
            <TextField type={"datetime-local"}
            value={startValue}
            onChange={(e)=>{setStartValue(e.target.value)}}/>
          </div>
          <div className='m-5 w-3/4'>

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                onChange={(value) => { setExpiryDate(value) }}
                renderInput={(params) => <TextField {...params} />}
                label="expiry date"
                value={expiryDate}
              />
            </LocalizationProvider> */}
            <p>expiry date</p>
            <TextField
            onChange={(e) => {setExpiryDate(e.target.value)}}
            value={expiryDate}
            type={"datetime-local"}
            />
          </div>
          <p>{JSON.stringify(startValue)}</p>
          <p>{JSON.stringify(expiryDate)}</p>
          <p>Address</p>
          <TextField label='City'
            className='m-5 w-3/4'
            value={city}
            onChange={(e) => { setCity(e.target.value) }} />
          
          <TextField label='pincode' type={"number"}
            className='m-5 w-3/4'
            value={pincode}
            onChange={(e) => { setPincode(parseInt(e.target.value)) }} />
          <TextField label="contact number"
            className='m-5 w-3/4'
            value={phone}
            onChange={(e) => { setPhone(parseInt(e.target.value)) }}
            type="number" />
          <Button variant='outlined' onClick={() => { handleSubmit()}}>Submit</Button>
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