"use server"
import { prisma } from "@/src/lib/prisma";

export async function deleteAppointmentAction(id: number){
    try{
        const response = await prisma.cita.delete({
            where: {id: id}
        })
        console.log("cita eliminada correctamente")
        return response
    }catch(error){
        console.log(error)
    }
}