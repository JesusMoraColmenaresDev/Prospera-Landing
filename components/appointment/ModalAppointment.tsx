"use client"
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Select, Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { formatData } from '@/utls/utils'
import { prisma } from '@/src/lib/prisma'
import { CitaSchema } from '@/src/schemas'
import { createCita } from '@/actions/create-cita-action'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type ModalAppointmentProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    consultationDate: Date
    freeHours: string[]
    hours: string[]
    setRefreshCitas : React.Dispatch<React.SetStateAction<number>>
}

const handleForm = (setIsOpen: Dispatch<SetStateAction<boolean>>, router :  AppRouterInstance, setRefreshCitas :  React.Dispatch<React.SetStateAction<number>>) =>

    async (formdata: FormData) => {
        
        const hour = formdata.get("hour")
        const start = formdata.get("dateSelected") //este start que es la fecha que cliqueamos , no tiene la hora , asi que tenemos que crear un nuevo start con la hora que selecciono el usuario

        const hourAndMinuts = hour!.toString().split(":")
        const startWhitHour = new Date(start!.toString())

        startWhitHour.setHours(Number(hourAndMinuts[0]))
        startWhitHour.setMinutes(Number(hourAndMinuts[1]))

        const DataForm = {
            name: formdata.get('clientName'),
            reason: formdata.get('reasonClient'),
            phone: formdata.get('phoneClient'),
            start: startWhitHour,
        }

        const result = CitaSchema.safeParse(DataForm)

        if (!result.success) {
            result.error.issues.forEach(issue => {
                console.log(issue)
            })
        }

        const response = await createCita(result.data)

        if (response?.errors) {
            response.errors.forEach(issue => {
                console.log(issue)
            })
            return
        }

        setIsOpen(false)
        setRefreshCitas(prev => prev + 1)
          
}



export default function ModalAppointment({ isOpen, setIsOpen, consultationDate, freeHours, hours , setRefreshCitas }: ModalAppointmentProps) {
    const router = useRouter()
    return (

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" open={isOpen} onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">

                                <Dialog.Title
                                    as="h3"
                                    className="font-black text-4xl  my-5"
                                >Agendar Cita</Dialog.Title>
                                {consultationDate && <p className="text-xl font-bold">Fecha para la cita : {formatData(consultationDate.toString())}</p>}


                                <form action={handleForm(setIsOpen, router, setRefreshCitas)} className='font-mono p-8'>
                                    <label htmlFor="selectHour"> Selecciona la hora para tu cita: </label>
                                    <select required
                                        id='hour'
                                        name='hour'>
                                        {hours.map(hour => (
                                            <option key={hour} disabled={!freeHours.includes(hour)} value={hour}>{hour}</option>
                                        ))}
                                    </select>

                                    <div className=' flex flex-col'>
                                        <label className='text-2xl' htmlFor="clientName">Nombre y Apellido</label>
                                        <input
                                            className='h-[48px] border-2 rounded-lg bg-white'
                                            type="text"
                                            required
                                            id='clientName'
                                            name='clientName' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='text-2xl' htmlFor="emailClient">Motivo de la cita</label>
                                        <input
                                            className=' h-[48px] border-2 rounded-lg bg-white'
                                            type="text"
                                            required
                                            id='reasonClient'
                                            name="reasonClient"
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='text-2xl' htmlFor="emailClient">Telefono</label>
                                        <input
                                            className=' h-[48px] border-2 rounded-lg bg-white'
                                            type="tel"
                                            placeholder='Ej : 04261234567'
                                            required
                                            id='phoneClient'
                                            name="phoneClient"
                                            pattern="[0-9]{11}"
                                        />
                                    </div>

                                    <input type="hidden" name='dateSelected' value={consultationDate?.toString()} />


                                    <button
                                        type='submit'
                                        className='rounded-4xl px-5 py-7 text-3xl text-[#F5ECE3] bg-[#183657] hover:bg-[#183677] transition-colors border-5 cursor-pointer text-center '
                                    >Enviar mensaje</button>
                                </form>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}
