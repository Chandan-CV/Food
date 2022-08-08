import { Input, TextField } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function Donate() {
  const { data: session } = useSession()
  const [startValue, setStartValue] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [name, setName] = useState<string>("");
  const [servings, setServings] = useState<number>()
  const [city, setCity] = useState<string>("")
  const [apartmentName, setApartmentName] = useState<string>("")
  const [pincode, setPincode] = useState<number>()
  const [landmarks, setLandmarks] = useState<string>("")
  const [phone, setPhone] = useState<number>()
  if (session) {

    return (
      <div>

        <Navbar />
        <h1>Wanting to donate extra food that you know will go waste?</h1>
        <div className='flex flex-col p-10 items-center'>
          <TextField label="name of the dish"
            className='m-5 w-3/4'
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <TextField label="number of servings" type={"number"}
            className='m-5 w-3/4'
            value={servings}
            onChange={(e) => { setServings(parseInt(e.target.value)) }} />
          <div className='m-5 w-3/4'>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                onChange={(value) => { setStartValue(value) }}
                renderInput={(params) => <TextField {...params} />}
                label="when was it made?"
                value={startValue}
              />
            </LocalizationProvider>
          </div>
          <div className='m-5 w-3/4'>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                onChange={(value) => { setExpiryDate(value) }}
                renderInput={(params) => <TextField {...params} />}
                label="expiry date"
                value={expiryDate}
              />
            </LocalizationProvider>
          </div>

          <p>Address</p>
          <TextField label='City'
            className='m-5 w-3/4'
            value={city}
            onChange={(e) => { setCity(e.target.value) }} />
          <TextField label='House name/ Apartment Name and flat number'
            className='m-5 w-3/4'
            value={apartmentName}
            onChange={(e) => { setApartmentName(e.target.value) }} />
          <TextField label='pincode' type={"number"}
            className='m-5 w-3/4'
            value={pincode}
            onChange={(e) => { setPincode(parseInt(e.target.value)) }} />
          <TextField label='landmarks nearby'
            className='m-5 w-3/4'
            value={landmarks}
            onChange={(e) => { setLandmarks(e.target.value) }} />
          <TextField label="contact number"
            className='m-5 w-3/4'
            value={phone}
            onChange={(e) => { setPhone(parseInt(e.target.value)) }}
            type="number" />
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