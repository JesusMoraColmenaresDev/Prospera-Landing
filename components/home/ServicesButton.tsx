"use client"
import {ChartNoAxesCombined } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

export default function ServicesButton() {

    const redirectPageServices = () => {
        redirect("/services")
    }
    return (

        <button
            type='button'
            className=' flex rounded-4xl px-5 py-7  text-3xl bg-[#F5ECE3] hover:bg-[#183657] hover:text-[#F5ECE3] transition-colors border-5 border-[#183657] text-[#183657] cursor-pointer'
            onClick={redirectPageServices}
        >
            Nuestros servicios
            <ChartNoAxesCombined className='w-9 h-9 ml-2' />
        </button>


    )
}
