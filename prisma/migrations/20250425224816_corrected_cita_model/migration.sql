/*
  Warnings:

  - You are about to drop the column `email` on the `Cita` table. All the data in the column will be lost.
  - Added the required column `reason` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cita" DROP COLUMN "email",
ADD COLUMN     "reason" TEXT NOT NULL;
