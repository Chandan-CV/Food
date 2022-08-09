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
            <Image src={logo}/>

          </div>
          <div className='w-2/3'>
            <div className='h-5' />
            <p className=' text-lg mb-3'>Do you know that one-third of all food globally goes to waste? That's enough to feed 3 billion people! If food waste were a country it would be the third-largest greenhouse gas emitter on the planet! If we all stop wasting edible food, it would be the equivalent of taking one in four cars off the road. As per one data, even in India where countless people sleep hungry, the average person wastes 137 grams of food every single day. That's a whooping 50 kg per year. </p>
            <p className=' text-lg mb-3'>Production of food creates an impact on land, water, air and human effort such as producing, processing, transporting and storing the food. When that food is wasted, all the resources used are wasted as well. This takes a heavy toll on our environment.</p>
            <p className=' text-lg mb-3'>Anna Brahma has made it's mission to bring food to those who need it. We aim reduce food wastage and strive to create a society where not even a single morsel goes to waste. We hope to a pave the way for a better future where no person is hungry. We also aim to make a sustainable society by  unnecessary food production, reducing carbon emissions and conserving our resources.</p>
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
