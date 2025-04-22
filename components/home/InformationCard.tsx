import React from 'react'

type InformationCardProps = {
  icon: React.JSX.Element
  value: string
  description: string
}

export default function InformationCard({ icon, value, description }: InformationCardProps) {
  return (
    <div className='flex flex-col items-center font-mono [word-spacing:-10px]'>
      <div className='rounded-full p-2 size-24 bg-[#F5ECE3]'>{icon}</div>
      <p className='font-bold text-5xl text-[#F5ECE3] pt-3'>{value}</p>
      <p className='font-bold text-4xl text-[#F5ECE3] pt-3'>{description}</p>
    </div>
  )
}
