"use server"
import { prisma } from "@/src/lib/prisma";
import { CitaSchema } from "@/src/schemas";

export async function createCita(data: unknown){
    const result = CitaSchema.safeParse(data)

    
    if(!result.success){
        return {
            errors : result.error.issues
        }
    }

    console.log(result.data)

    await prisma.cita.create({
        data:result.data
    })
}