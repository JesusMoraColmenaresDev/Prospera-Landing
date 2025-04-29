import ContactForm from '@/components/contact/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function ContactPage() {
    return (
        <div className='flex gap-4'>
            <div className='flex flex-col justify-center gap-12 border-l-4 border-black/50 pl-4'>
                <div className=' flex flex-col gap-12'>
                    <p className='text-6xl'>Contáctanos hoy para comenzar tu camino a la <span className='text-[#183657] font-extrabold'>Prosperidad</span></p>
                    <p className='text-4xl text-[#3A3A3A] opacity-80 mt-8 ml-4 font-extrabold font-mono'>Nuestro equipo respondera en menos de 24 horas</p>
                </div>



                <div className='text-3xl flex items-center gap-16 mt-8'>


                    <div className='flex items-center gap-1 font-mono font-extrabold'>
                        <Phone className='text-[#183657] size-12' strokeWidth={2.1} />
                        <p className='[word-spacing:-6px]'>+58 12345678</p>
                    </div>

                    <div className='flex items-center gap-1 font-mono font-extrabold '>
                        <Mail className='text-[#183657] size-12' strokeWidth={2.1} />
                        <p>correo@correo.com</p>
                    </div>



                    <div className='flex items-center gap-1 font-mono font-extrabold '>
                        <MapPin className='text-[#183657] size-12' strokeWidth={2.1} />
                        <p className='[word-spacing:-6px]'>Plaza Los Mangos</p>
                    </div>

                </div>
            </div>
            <ContactForm></ContactForm>
        </div>
    )
}
