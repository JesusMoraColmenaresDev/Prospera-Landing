import { Copyright } from 'lucide-react'
import React from 'react'

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer>
        <div className='bg-[#183657] text-[#F5ECE3] items-center flex flex-col pt-8'>
            <p className='text-3xl '>Todos los derechos reservados</p>
            <div className=' justify-center flex items-center'>
                <Copyright strokeWidth={2.8} width={48} height={48}/>
                <img className='size-64 object-cover h-32' src="PerformaxLogoWhite.png" alt="PerformaxLogo" />
                <p className='text-4xl'>{currentYear}</p>
            </div>
        </div>
    </footer>
  )
}
