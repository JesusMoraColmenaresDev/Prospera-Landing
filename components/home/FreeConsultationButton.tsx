import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function FreeConsultationButton() {
  return (
    <button 
        type='button'
        className='flex rounded-4xl px-5 py-7 text-3xl  bg-[#183657] hover:bg-[#183677] text-[#F5ECE3] transition-colors cursor-pointer'
    >
        Consulta gratuita
      
      <ArrowRight className='w-9 h-9 ml-2'/>
    </button>
  )
}
