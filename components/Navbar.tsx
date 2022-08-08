import { AppBar, Toolbar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
function Navbar() {
const {data:session} = useSession()

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <div className='flex flex-1 justify-between'>
                    <div className='flex flex-1'>

                    <h1 className='font-Goblin text-xl'>Anna Brahma</h1>
                     </div>
                    <div className='flex flex-1 justify-evenly'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/Aboutus'}>About us</Link>
                        {session?<>
                        <Link href={'/Donate'}>Donate</Link>
                        <Link href={'/Accept'}>Accept</Link>
                        
                        <Link href={'/MyAccount'}>My Account</Link> 
                        <p onClick={() => { signOut() } } className='cursor-pointer'>logout</p></>
                        :
                        <p onClick={()=>{signIn()}} className='cursor-pointer'>Sign in</p>}
                    
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar