"use client"
import React, { useRef, useState } from 'react'
import { DateClickArg } from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventClickArg } from '@fullcalendar/core/index.js'
import { formatData, formatDataHour } from '@/utls/utils'
import ModalAppointment from '@/components/appointment/ModalAppointment'


const events = [
    { title: 'Meeting', start: new Date() }
]


export default function AppointmentPage() {

    const [isOpen, setIsOpen] = useState(false)
    const [consultationDate, setConsultationDate] = useState<Date>()

    const handleDateClick = (arg: DateClickArg) => {
        setIsOpen(true)
        setConsultationDate(arg.date)
        
    }
    
    return (
        <div className='bg-white p-12 opacity-80 rounded-4xl'>
            <h1>Selecciona la fecha y la hora en la que desees agendar tu consulta gratuita</h1>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={events}
                dateClick={handleDateClick}
            />

            <ModalAppointment isOpen = {isOpen} setIsOpen={setIsOpen}  consultationDate = {consultationDate!} ></ModalAppointment>

        </div>


    )
}
