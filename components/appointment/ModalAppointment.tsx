"use client"
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { formatData } from '@/utls/utils'

type ModalAppointmentProps = {
    isOpen : boolean
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
    consultationDate : Date
}

export default function ModalAppointment({isOpen, setIsOpen, consultationDate} : ModalAppointmentProps) {
    return (

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" open = {isOpen} onClose={() => setIsOpen(false)}>
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
                            

                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>

    )
}
