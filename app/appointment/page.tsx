"use client"
import React, { useEffect, useRef, useState } from 'react'
import { DateClickArg } from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventClickArg } from '@fullcalendar/core/index.js'
import { formatData, formatDataHour } from '@/utls/utils'
import ModalAppointment from '@/components/appointment/ModalAppointment'
import { getCitas } from '@/actions/get-cita-action'
import { z } from 'zod'
import { CitaSchema } from '@/src/schemas'

type citasType = z.infer<typeof CitaSchema>

const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']


/*export const events = [
    { start: new Date("2025-04-25T14:00:00"), name: "jesus", reason: "asesoria de bolsa de valores", phone: "04261234567" },
    { start: new Date("2025-04-25T08:00:00"), name: "jesus", reason: "asesoria de inversion", phone: "04261234567" }
]*/


export default function AppointmentPage() {
    const [citas, setCitas] = useState<citasType[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [consultationDate, setConsultationDate] = useState<Date>()
    const [freeHours, setFreeHours] = useState<string[]>([])
    const [refreshCitas, setRefreshCitas] = useState(0)

    useEffect(() => {
        const getCitasForCalendary = async () => {
            const citasFromDb = await getCitas()
            const citasArray = citasFromDb.map(cita => ({
                name: cita.name,
                reason: cita.reason,
                phone: cita.phone,
                start: cita.start
            }))
            setCitas(citasArray)

        }
        getCitasForCalendary()
    }, [refreshCitas])

    const handleDateClick = (arg: DateClickArg) => {
        setIsOpen(true)
        setConsultationDate(arg.date)

        const CitasOfDay = citas.filter(cita => {
            const fechaEvento = cita.start.toString().slice(0, 10)
            // lo que hara esto es devolver los primeros 10 elementos del string que trae la fecha , 
            // osea en lugar de traer : Fri Apr 25 2025 00:00:00 GMT-0400 (hora de Venezuela) 
            // solo trae las 10 primeros elementos del string que son : Fri Apr 25
            return fechaEvento === arg.date.toString().slice(0, 10)
        })

        //obtengo las horas en las que ya hay eventos
        const hoursOcuppied = CitasOfDay.map(cita => {
            return cita.start.getHours().toString().padStart(2, '0') + ":00"; // esto es para que tenga el formato de hora tipo  08:00
        })

        console.log("Horas ocupadas " + hoursOcuppied)

        //aqui filtro todo el arreglo de hours , para que solo queden en freeHours las horas que no esten en hoursOcuppied, osea que no esten ocupadas por otro evento ya
        setFreeHours(hours.filter(hour => {
            return !hoursOcuppied?.includes(hour)
        }))
    }

    return (
        <div className='bg-white p-12 opacity-80 rounded-4xl'>
            <h1>Selecciona la fecha y la hora en la que desees agendar tu consulta gratuita</h1>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={citas}
                dateClick={handleDateClick}
                eventContent={(arg) => {
                    const name = arg.event.extendedProps.name;
                    const hour = arg.event.start!.getHours().toString().padStart(2, '0') + ":00";
                    return (
                        <div>
                            <b>{hour + " - " + name}</b>
                        </div>
                    );
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                }}
            />

            <ModalAppointment isOpen={isOpen} setIsOpen={setIsOpen} consultationDate={consultationDate!} freeHours={freeHours!} hours={hours} setRefreshCitas = {setRefreshCitas} ></ModalAppointment>

        </div>


    )
}
