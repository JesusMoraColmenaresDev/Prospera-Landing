import { AtSign } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='bg-[#183657] text-[#F5ECE3] items-center flex flex-col pt-8'>
            <p className='text-3xl '>Todos los derechos reservados</p>
            <div className=' justify-center flex items-center'>
                <AtSign strokeWidth={2.8}/>
                <img className='size-64 object-cover h-32' src="PerformaxLogoWhite.png" alt="PerformaxLogo" />
                <p className='text-4xl'>2025</p>
            </div>
        </div>
    </footer>
  )
}
