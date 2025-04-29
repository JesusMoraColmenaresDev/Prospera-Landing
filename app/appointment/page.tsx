"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { DateClickArg } from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventClickArg } from '@fullcalendar/core/index.js'
import ModalAppointment from '@/components/appointment/ModalAppointment'
import { getAppoimentsAction } from '@/actions/get-appointments-action'
import { useStore } from '@/src/store'

export const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

export default function AppointmentPage() {
    const refreshAppointments = useStore((state) => state.refreshAppointments)
    const appointments = useStore((state) => state.appointments);
    const appointmentSelected = useStore((state) => state.appointmentSelected);
    const [appointmentsCargados, setAppointmentsCargados] = useState(false)
    const setOpenModalAppointment = useStore((state) => state.setOpenModalAppointment)
    const setAppointmentSelected = useStore((state) => state.setappointmentSelected)
    const setSelectedDate = useStore((state) => state.setSelectedDate)
    const setEditAppointment = useStore((state) => state.setEditAppointment)
    const SelectedDate = useStore((state) => state.selectedDate)
    const setFreeHoursSelectedDate = useStore((state) => state.setFreeHoursSelectedDate)
    const setAppoiments = useStore((state) => state.setAppoiments)



    useEffect(() => {
        const getAppoiments = async () => {
            const appoimentsFromDB = await getAppoimentsAction()
            setAppoiments(appoimentsFromDB)
        }
        getAppoiments()
        setAppointmentsCargados(true)
    }, [refreshAppointments]);

    const filterBusyHours = () => {
        const AppoimentsOfDateSelected = appointments.filter(appointment => {
            const dateAppoiment = appointment.start.toString().slice(0, 10)
            // lo que hara esto es devolver los primeros 10 elementos del string que trae la fecha , 
            // osea en lugar de traer : Fri Apr 25 2025 00:00:00 GMT-0400 (hora de Venezuela) 
            // solo trae las 10 primeros elementos del string que son : Fri Apr 25
            return dateAppoiment === SelectedDate.toString().slice(0, 10)
        })

        //obtengo las horas en las que ya hay citas en el dia seleccionado
        const hoursOcuppied = AppoimentsOfDateSelected.map(appointment => {
            return appointment.start.getHours().toString().padStart(2, '0') + ":00"; // esto es para que tenga el formato de hora tipo  08:00
        })

        console.log("Horas ocupadas " + hoursOcuppied)

        //aqui filtro todo el arreglo de hours , para que solo queden en freeHours las horas que no esten en hoursOcuppied, osea que no esten ocupadas por otro evento ya
        setFreeHoursSelectedDate(hours.filter(hour => {
            return !hoursOcuppied?.includes(hour)
        }))
    }

    useEffect(() => {
        filterBusyHours()
    }, [SelectedDate, appointmentSelected])

    const handleDateClick = (arg: DateClickArg) => {
        setOpenModalAppointment(true)
        setSelectedDate(arg.date)
        setAppointmentSelected(undefined)
        setEditAppointment(false)

    }

    const handleEventClick = (info: EventClickArg) => {
        setOpenModalAppointment(true)
        setSelectedDate(info.event.start!)
        setEditAppointment(true)
        setAppointmentSelected(appointments.find(appointment => appointment.start.getTime() === info.event.start!.getTime()))
    }

    if (!appointmentsCargados) {
        return <div>Cargando calendario...</div>;
    }

    const calendarEvents = appointments.map((appointment) =>
    ({
        id: appointment.id.toString(),
        title: appointment.name, // Texto que aparecerá en el evento
        start: appointment.start, // Fecha de inicio
        extendedProps: { // Propiedades adicionales
            name: appointment.name,
            reason: appointment.reason,
            phone: appointment.phone,
            createdAt: appointment.createdAt
        }
    })
    )

    return (
        <div className='bg-white p-12 opacity-80 rounded-4xl'>
            <h1 className='text-6xl mb-8 py-8 text-center border-b-2 border-b-black/50'>Selecciona la fecha y la hora en la que desees agendar <span className='text-[#183657] font-extrabold'>tu consulta gratuita</span></h1>

            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={calendarEvents}
                dateClick={handleDateClick}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                }}
                eventClick={handleEventClick}
                eventContent={(arg) => (
                    <div className="px-2 py-1 w-full rounded-lg text-lg whitespace-normal bg-[#F5ECE3] m-2 cursor-pointer">
                        <div><span className='font-extrabold'>{arg.timeText}</span> - {arg.event.title}</div>
                    </div>
                )}
                dayCellClassNames={() => ['cursor-pointer']}
            />

            {<ModalAppointment></ModalAppointment>}

        </div>


    )
}
