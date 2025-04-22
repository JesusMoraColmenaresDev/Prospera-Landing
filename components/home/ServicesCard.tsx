import React from 'react'


type ServicesCardProps = {
  icon: React.JSX.Element
  title: string
  description: string
}

export default function ServicesCard({ icon, title, description }: ServicesCardProps) {
    return (
        <div className='flex flex-col pl-6 pt-6 pr-12 bg-white rounded-4xl max-w-lg'>
          <div className='rounded-full p-2 mb-2 size-20 text-[#183657] bg-[#F5ECE3]'>{icon}</div>
          <p className='font-bold text-3xl text-[#183657] pt-3 mb-4'>{title}</p>
          <p className='font-semibold text-2xl pt-3 leading-[2.5]'>{description}</p>
        </div>
      )
}
