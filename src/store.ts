import {create} from 'zustand'
import { Cita } from '@prisma/client'
import { appointments } from '@/prisma/data/appoiments'


type eventsProps = {
    id: string;
    title: string;
    start: Date;
    extendedProps: {
        name: string;
        reason: string;
        phone: string;
        createdAt: Date;
    }
}
interface Store {
    appointments : Cita[]
    openModalAppointment : boolean
    selectedDate : Date
    appointmentSelected : Cita | undefined
    freeHoursSelectedDate :string[]
    refreshAppointments:  number // se le sumara +1 a este valor , eso hara que el useEffect que llama a las citas a la base de datos , traiga los datos actualizados cuando hagamos un cambio o agreguemos una nueva cita
    editAppointment : boolean
    setOpenModalAppointment : (value: boolean) => void
    setSelectedDate : (value: Date) => void
    setappointmentSelected : (value: Cita | undefined) => void
    setEditAppointment : (value: boolean) => void
    setFreeHoursSelectedDate: (value: string[]) => void
    setAppoiments: (value: Cita[]) => void
    setRefreshAppointments: () => void

    
}

const appointmentInitial = {
    name: "",
    id: 0,
    reason: "",
    phone: "",
    start: new Date(),
    createdAt: new Date(),
}

export const useStore = create<Store>((set, get) => ({
    appointments : [],
    openModalAppointment : false,
    selectedDate : new Date(),
    appointmentSelected : undefined,
    freeHoursSelectedDate : [],
    refreshAppointments:  1 ,
    editAppointment : false,
    setOpenModalAppointment : (value) => set({openModalAppointment: value}),
    setSelectedDate : (value) => set({selectedDate: value}),
    setappointmentSelected : (value) => set({appointmentSelected : value}),
    setEditAppointment : (value) => set({editAppointment : value}),
    setFreeHoursSelectedDate: (value) => set({freeHoursSelectedDate : value}),
    setAppoiments: (value) => set({appointments : value}),
    setRefreshAppointments: () => set({refreshAppointments : get().refreshAppointments + 1})
}))