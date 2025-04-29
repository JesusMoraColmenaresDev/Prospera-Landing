"use server"
import { prisma } from "@/src/lib/prisma";
import { CitaSchema } from "@/src/schemas";

export async function updateAppointmentAction(data: unknown, id : number){
    const result = CitaSchema.safeParse(data)
    try{
        if(result.success){
            await prisma.cita.update({
                where : {id : id},
                data : result.data
            })
    
        }else{
            return {
                errors : result.error.issues
            }
        }
    }catch(error){
        console.log(error)
    }

}