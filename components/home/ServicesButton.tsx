import {ChartNoAxesCombined } from 'lucide-react'
import React from 'react'

export default function ServicesButton() {
    return (

        <button
            type='button'
            className=' flex rounded-4xl px-5 py-7  text-3xl bg-[#F5ECE3] border-5 border-[#183657] text-[#183657]'
        >
            Nuestros servicios
            <ChartNoAxesCombined className='w-9 h-9 ml-2' />
        </button>


    )
}
