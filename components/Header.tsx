import React from 'react'
import Logo from './Logo'
import FreeConsultationButton from './home/FreeConsultationButton'

export default function Header() {
  return (
    <header>
        <div className='flex justify-between items-center'>
            <div className='w-42 py-1'>
                <Logo></Logo>
            </div>

            <div className='flex gap-24 text-[#183657] text-2xl'>
                <a href="/">Home</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
                <a href="/">About Us</a>
            </div>

            <FreeConsultationButton></FreeConsultationButton>
        </div>


    </header>
  )
}
