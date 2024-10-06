import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
        <div>
            <Link href='/'>
                <Image 
                    src='/assets/images/logo.svg'
                    alt='logo'
                    width={128}
                    height={38}
                />
            </Link>
            <p className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>2024 Evently. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer