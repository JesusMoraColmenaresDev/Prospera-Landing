import React from 'react'


type ProsperaAdvantagesCardProps = {
  icon: React.JSX.Element
  title: string
  description: string
}

export default function ProsperaAdvantagesCard({ icon, title, description }: ProsperaAdvantagesCardProps) {
    return (
        <div className='flex flex-col p-6 bg-white rounded-4xl max-w-lg break-words overflow-hidden whitespace-normal'>
          <div className='rounded-full p-2 mb-2 size-20 text-[#183657] bg-[#F5ECE3]'>{icon}</div>
          <p className='font-bold text-3xl text-[#183657] pt-3 mb-4 opacity-80 '>{title}</p>
          <p className='font-semibold text-2xl pt-3 leading-[2.0] opacity-80'>{description}</p>
        </div>
      )
}
