"use server"
import { prisma } from "@/src/lib/prisma";

export async function getAppoimentsAction() {
  try {
    const citas = await prisma.cita.findMany({
      orderBy: { start: "asc" }
    });
    return citas;
  } catch (error) {
    console.error("Error al obtener citas:", error);
    return [];
  }
}
