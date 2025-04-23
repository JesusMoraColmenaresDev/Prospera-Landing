import React from 'react'

export default function AboutUspage() {
  return (
    <div className='flex gap-8 items-center '>
      <div className='flex flex-col gap-2 border-l-2'>
        <p className='text-[#183657] font-extrabold text-7xl  pl-4 py-4'>Acerca de nosotros:</p>
        <p className='font-semibold text-3xl ml-4'>Nuestra mision: <span className='text-[#183657] text-3xl font-extrabold'>Tu exito financiero</span></p>
        <p className='text-2xl gap-6 text-[#3A3A3A] opacity-80 ml-4 mt-8'>Nos dedicamos a brindar orientacion financiera experta adaptada a tus necesidades únicas.
          Nuestros profesionales con experiencia están comprometidos a ayudarte a alcanzar un éxito
          financiero duradero mediante estrategias personalizadas y un apoyo constante
        </p>
      </div>
      <img className='size-140 object-cover' src="./advisors_work_area.png" alt="advisors_work_area" />
    </div>
  )
}
