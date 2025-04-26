import {z} from "zod"

export const CitaSchema = z.object({
    start : z.date(),
    name : z.string().min(1, 'Tu Nombre es obligatorio'),
    reason : z.string().min(1, 'La razon de su cita es obligatoria'),
    phone : z.string().min(1, 'Su numero de telefono es obligatorio'),
})