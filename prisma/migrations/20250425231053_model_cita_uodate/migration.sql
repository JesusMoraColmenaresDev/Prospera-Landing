/*
  Warnings:

  - Added the required column `date` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cita" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "start" SET DATA TYPE TEXT;
