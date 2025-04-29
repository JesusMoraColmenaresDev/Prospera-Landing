import React from 'react'

type ServicesCardProps = {
    icon: React.JSX.Element
    title: string
    description: string
}

export default function ServicesCard({ icon, title, description }: ServicesCardProps) {
    return (
        <div className='flex flex-col  p-10 bg-white rounded-4xl max-w-sm break-words overflow-hidden whitespace-normal transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl'>
            <div className='size-40 flex mx-auto mb-2 text-[#183657]'>{icon}</div>
            <p className=' flex items-center justify-center min-h-18 font-bold text-3xl text-center text-[#183657] mb-2 opacity-80 whitespace-pre-line'>{title}</p> {/**whitespace-pre-line es para que se respete el \n que mando en title */}
            <p className='font-semibold text-2xl  text-center leading-[2.0] pt-4 opacity-80 '>{description}</p>
        </div>
    )
}
