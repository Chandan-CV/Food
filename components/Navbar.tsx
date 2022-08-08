import { AppBar, Toolbar } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Navbar() {

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <div className='flex flex-1 justify-between'>
                    <div className='flex flex-1'>

                    <h1>Food</h1>
                     </div>
                    <div className='flex flex-1 justify-evenly'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/Aboutus'}>About us</Link>
                        <Link href={'/Donate'}>Donate</Link>
                        <Link href={'/Accept'}>Accept</Link>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar