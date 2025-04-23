import React from 'react'

export default function ContactForm() {
  return (
    <div>
        <form className='rounded-4xl h-full w-xl flex flex-col justify-center gap-16 font-extrabold opacity-80'>
            

            <div className=' flex flex-col'>
                <label className='text-2xl' htmlFor="clientName">Nombre</label>
                <input 
                    className='h-[48px] border-2 rounded-lg bg-white' 
                    type="text" 
                    required
                    id='clientName' />
            </div>

            <div className='flex flex-col'>
                <label className='text-2xl' htmlFor="emailClient">Correo electronico</label>
                <input 
                    className=' h-[48px] border-2 rounded-lg bg-white' 
                    type="email" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required  
                    id='emailClient'
                />
            </div>

            <div className='flex flex-col'>
                <label className='text-2xl' htmlFor="messageClient">Mensaje</label>
                <input 
                    className=' h-[96px] border-2 rounded-lg bg-white' 
                    type="text"
                    required
                    id='messageClient' 
                />

            </div>

            <button 
                type='submit'
                className='rounded-4xl px-5 py-7 text-3xl text-[#F5ECE3] bg-[#183657] hover:bg-[#183677] transition-colors border-5 cursor-pointer text-center '
            >Enviar mensaje</button>
        </form>
    </div>
    //bg-[#F5ECE3]
    )
}
