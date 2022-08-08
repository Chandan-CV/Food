import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/logo.png';
import logoBlack from '../assets/logo-black.png';

function Aboutus() {
  return (
    <div className='h-screen '>
      <Navbar />
      <div>
        <div className='mt-10 ml-10 mr-10 flex flex-col flex-1 min-h-full'>
          <div className='flex flex-row flex-1'>
            <div>

              <h1 className='font-Goblin text-6xl'>WHAT IS</h1>
              <div className='h-4' />
              <h1 className='font-Goblin text-6xl'>ANNA BRAHMA?</h1>
            </div>

          </div>
          <div className='w-2/3'>
            <div className='h-5' />
            <p className=' text-2xl '>Have humongous amount of food left untouched at your birthday or wedding? Donate it to the less fortunate through Anna Brahma</p>
          </div>


          <div className='mt-20 flex flex-row justify-between'>

            <div className='w-1/4'>
              <h1 className='text-2xl font-bold'>Donate Extra Food</h1>
              <div className='h-2' />
              <p>You can donate your food to an NGO or Trust who are looking to feed the needy.</p>
            </div>

            <div className='w-1/4'>
              <h1 className='text-2xl font-bold'>Get food donations</h1>
              <div className='h-2' />
              <p>Are you an NGO looking for food donations. Get in contact with people who are willing to do so.</p>
            </div>
          </div>

        </div>
        <div className='bg-red-500 flex flex-row justify-self-end self-end align-middle items-center justify-center mt-5'>
         <div className='flex flex-col text-white'>

          <h1 className='font-Goblin text-4xl'>ANNA</h1>
          <div className='h-4' />
          <h1 className='font-Goblin text-4xl'>BRAHMA</h1>
         </div>
        <Image src={logoBlack}/>  
        </div>
      </div>
    </div>
  )
}

export default Aboutus