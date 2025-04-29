"use client"
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Select, Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { formatData } from '@/utls/utils'
import { createCita } from '@/actions/create-appointment-action'
import { useRouter } from 'next/navigation'
import AppointmentForm from './AppointmentForm'
import { useStore } from '@/src/store'
import { updateAppointmentAction } from '@/actions/update-appointment-action'
import { deleteAppointmentAction } from '@/actions/delete-appoinment-action'
import { X } from 'lucide-react'


type handleFormProps = {
    setOpenModalAppointment: (value: boolean) => void
    setRefreshAppointments: () => void
    EditAppointment: boolean
}


export default function ModalAppointment() {

    const EditAppointment = useStore((state) => state.editAppointment)
    const openModalAppointment = useStore((state) => state.openModalAppointment)
    const setOpenModalAppointment = useStore((state) => state.setOpenModalAppointment)
    const setRefreshAppointments = useStore((state) => state.setRefreshAppointments)
    const appointmentSelected = useStore((state) => state.appointmentSelected)

    const SelectedDate = useStore((state) => state.selectedDate)
    const router = useRouter()

    const handleForm = ({ setOpenModalAppointment, setRefreshAppointments, EditAppointment }: handleFormProps) => async (formdata: FormData) => {
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

        if (!EditAppointment) {
            const response = await createCita(DataForm)
            if (response?.errors) {
                response.errors.forEach(issue => {
                    console.log(issue.message)
                })
                return
            }
        } else {
            const response = await updateAppointmentAction(DataForm, appointmentSelected?.id!)
            if (response?.errors) {
                response.errors.forEach(issue => {
                    console.log(issue.message)
                })
                return
            }
        }

        setOpenModalAppointment(false)
        setRefreshAppointments()

    }

    const deleteAppointment = async () => {
        try {
            const response = await deleteAppointmentAction(appointmentSelected?.id!)
            setOpenModalAppointment(false)
            setRefreshAppointments()
        } catch (error) {
            console.log(error)
        }

    }
    return (

        <Transition appear show={openModalAppointment} as={Fragment}>
            <Dialog as="div" className="relative z-10" open={openModalAppointment} onClose={() => setOpenModalAppointment(false)}>
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
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-8">

                                <div className='border-b-2 border-black/50 mx-6 pb-4'>
                                    <div className='flex justify-end'>
                                        <X strokeWidth={3.0} onClick={() => setOpenModalAppointment(false)} className='cursor-pointer' />
                                    </div>

                                    <Dialog.Title
                                        as="h3"
                                        className="font-black text-4xl  my-5 text-center"
                                    >{EditAppointment ? " Editar Cita" : "Agendar Cita"}</Dialog.Title>

                                    {SelectedDate && <p className="text-xl font-bold text-center">Fecha para la cita : {formatData(SelectedDate.toString())}</p>}
                                </div>

                                <form action={handleForm({ setOpenModalAppointment, setRefreshAppointments, EditAppointment })} className='rounded-4xl w-xl mx-auto font-extrabold  opacity-80'>
                                    <AppointmentForm></AppointmentForm>
                                    <div className=' mt-8 flex flex-col px-24 gap-6'>
                                        <button
                                            type='submit'
                                            className='rounded-4xl px-5 py-7 text-3xl text-[#F5ECE3] bg-[#183657] hover:bg-[#183677] transition-colors border-5 cursor-pointer text-center '
                                        >{EditAppointment ? "Guardar Cambios" : "Guardar Cita"}</button>

                                        {appointmentSelected &&
                                            <button
                                                type='button'
                                                onClick={deleteAppointment}
                                                className='rounded-4xl px-5 py-7 text-3xl text-[#F5ECE3] bg-red-600 hover:bg-red-500 transition-colors border-5 cursor-pointer text-center '
                                            >
                                                Eliminar
                                            </button>
                                        }

                                    </div>


                                </form>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}
