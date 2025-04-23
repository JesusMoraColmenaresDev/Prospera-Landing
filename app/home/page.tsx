import Footer from '@/components/Footer'
import FreeConsultationButton from '@/components/home/FreeConsultationButton'
import InformationCard from '@/components/home/InformationCard'
import ServicesButton from '@/components/home/ServicesButton'
import ServicesCard from '@/components/home/ServicesCard'
import Logo from '@/components/Logo'
import { CalendarDays, CircleUser, DollarSign, Headset } from 'lucide-react'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <main>
        <section className='flex mt-20 '>
          <div className='flex flex-col'>

            <div className='text-6xl'>
              <p>Planifica hoy. <span className='text-[#183657] font-extrabold'>Prospera</span> mañana</p>
            </div>

            <div className=' flex flex-col text-2xl gap-6 text-[#3A3A3A] opacity-70 mt-14 ml-4'>
              <p>Asesoria financiera asegurada para ayudarte a alcanzar tus metas.</p>
              <p>Nuestros expertos te guiarán en cada paso del camino hacia la prosperidad</p>
            </div>

            <div className='flex gap-24 m-16'>
              <FreeConsultationButton />
              <ServicesButton />
            </div>
          </div>
          <img className='size-120 ml-16' src="./programmer_workstation.png" alt="workstation" />
        </section>


        <section className='rounded-2xl flex justify-between p-8 bg-[#183657] w-full mt-12'>
          <InformationCard
            icon={<CircleUser className='size-full' strokeWidth={1.5} />}
            value="+500"
            description="Clientes satisfechos"
          />

          <InformationCard
            icon={<CalendarDays className='size-full' strokeWidth={1.5} />}
            value="+10"
            description="Años de experiencia"
          />

          <InformationCard
            icon={<Headset className='size-full' strokeWidth={1.5} />}
            value="24/7"
            description="Soporte disponible"
          />
        </section>

        <section className='mt-24'>
          <div className='flex flex-col items-center'>
            <p className='text-6xl '>¿Por qué elegir <span className='text-[#183657] font-extrabold'>Prospera</span></p>

            <div className=' flex flex-col items-center text-2xl gap-6 text-[#3A3A3A] opacity-70 mt-14 ml-4 font-extrabold'>
              <p>Nuestro enfoque te brindará una visión de tus finanzas</p>
              <p>con la que llegarás a cumplir tus objetivos</p>
            </div>
          </div>
        </section>

        <section className='mt-12 grid xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>
          <ServicesCard
          
              icon={<DollarSign className='size-full' strokeWidth={1.8} />}
              title="Asesoria financiera"
              description="Asesorate para tener las mejores finanzas de la mano de nuestros profesionales"
            />

            <ServicesCard
              icon={<DollarSign className='size-full' strokeWidth={1.8} />}
              title="Asesoria financiera"
              description="Asesorate para tener las mejores finanzas de la mano de nuestros profesionales"
            />

            <ServicesCard
              icon={<DollarSign className='size-full' strokeWidth={1.8} />}
              title="Asesoria financiera"
              description="Asesorate para tener las mejores finanzas de la mano de nuestros profesionales"
            />
        </section>
      </main>
    </>
  )
}
