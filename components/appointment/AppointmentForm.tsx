import React from 'react'
import { hours } from '@/app/appointment/page'
import { useStore } from '@/src/store'

export default function AppointmentForm() {
    const freeHoursSelectedDate = useStore((state) => state.freeHoursSelectedDate)
    const appointmentSelected = useStore((state) => state.appointmentSelected)
    const appointmensetSelected = useStore((state) => state.appointmentSelected)
    const selectedDate = useStore((state) => state.selectedDate)
    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className='text-lg'>
                    <label htmlFor="selectHour"> Selecciona la hora para tu cita: </label>
                    <select required
                        id='hour'
                        name='hour'
                        defaultValue={appointmentSelected && (appointmentSelected?.start.getHours().toString().padStart(2, '0') + ":00")}
                    >
                        {hours.map(hour => (
                            <option
                                key={hour}
                                disabled={!freeHoursSelectedDate.includes(hour) && (hour !== appointmentSelected?.start.getHours().toString().padStart(2, '0') + ":00")}
                                value={hour}
                            >

                                {hour}</option>
                        ))}

                    </select>
                </div>


                <div className=' flex flex-col gap-2'>
                    <label className='text-2xl' htmlFor="clientName">Nombre y Apellido</label>
                    <input
                        className='h-[48px] border-2 rounded-lg bg-white p-2'
                        type="text"
                        required
                        id='clientName'
                        name='clientName'
                        defaultValue={appointmentSelected?.name}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-2xl' htmlFor="emailClient">Motivo de la cita</label>
                    <input
                        className=' h-[48px] border-2 rounded-lg bg-white p-2'
                        type="text"
                        required
                        id='reasonClient'
                        name="reasonClient"
                        defaultValue={appointmentSelected?.reason}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-2xl' htmlFor="emailClient">Telefono</label>
                    <input
                        className=' h-[48px] border-2 rounded-lg bg-white p-2 font-mono'
                        type="tel"
                        placeholder='Ej : 04261234567'
                        required
                        id='phoneClient'
                        name="phoneClient"
                        pattern="[0-9]{11}"
                        defaultValue={appointmentSelected?.phone}
                    />
                </div>

                <input type="hidden" name='dateSelected' value={selectedDate?.toString()} />
            </div>

        </>
    )
}
