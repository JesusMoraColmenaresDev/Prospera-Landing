import React from 'react'
import Logo from './Logo'
import FreeConsultationButton from './home/FreeConsultationButton'

export default function Header() {
  return (
    <header>
        <div className='flex justify-between items-center pr-4'>
            <div className='w-42 py-1'>
                <Logo></Logo>
            </div>

            <div className='flex gap-24 text-[#183657] text-2xl'>
                <a href="/home" className='hover:bg-[#183657] hover:text-[#F5ECE3] hover:opacity-70 hover:p-4 hover:rounded-lg transition-all cursor-pointer'>Home</a>
                <a href="/" className='hover:bg-[#183657] hover:text-[#F5ECE3] hover:opacity-70 hover:p-4 hover:rounded-lg transition-all cursor-pointer'>Services</a>
                <a href="/contact" className='hover:bg-[#183657] hover:text-[#F5ECE3] hover:opacity-70 hover:p-4 hover:rounded-lg transition-all cursor-pointer'>Contact</a>
                <a href="/about" className='hover:bg-[#183657] hover:text-[#F5ECE3] hover:opacity-70 hover:p-4 hover:rounded-lg transition-all cursor-pointer'>About Us</a>
            </div>

            <FreeConsultationButton></FreeConsultationButton>
        </div>


    </header>
  )
}
