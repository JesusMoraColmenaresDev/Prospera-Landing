import { PrismaClient } from "@prisma/client";
import { appointments } from "./data/appoiments";

const prisma = new PrismaClient()

async function main() {
    try{
        await prisma.cita.createMany({
            data : appointments
        })
    }catch(error){
        console.log(error)
    }
}

main().then(async () => {
    await prisma.$disconnect()//si todo sale bien ejecuta el main y cierra la conexion , para no tener ahi conexiones aparte consumiendo recursos
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})