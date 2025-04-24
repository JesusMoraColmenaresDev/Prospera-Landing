"use client"
import React from 'react'
import { DateClickArg } from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventClickArg } from '@fullcalendar/core/index.js'
import { formatData, formatDataWithHour } from '@/utls/utils'

const events = [
    { title: 'Meeting', start: new Date() }
]

const handleDateClick = (arg : DateClickArg) => {
    alert( ' fecha para la cita: ' + formatData(arg.date.toString()))
}

const handleDateEvent = (info : EventClickArg) => {
    if(info){
        console.log(formatDataWithHour(info.event.start?.toString()!))
    }

}

export default function AppointmentPage() {
    return (
        <div className='bg-white p-12 opacity-80 rounded-4xl'>
            <h1>Selecciona la fecha y la hora en la que desees agendar tu consulta gratuita</h1>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={events}
                dateClick={handleDateClick}
                eventClick={handleDateEvent}
            />
        </div>
    )
}
