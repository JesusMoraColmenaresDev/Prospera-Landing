/*
  Warnings:

  - You are about to drop the column `fecha` on the `Cita` table. All the data in the column will be lost.
  - Added the required column `email` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cita" DROP COLUMN "fecha",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;
