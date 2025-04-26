/*
  Warnings:

  - You are about to drop the column `date` on the `Cita` table. All the data in the column will be lost.
  - Added the required column `hour` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `start` on the `Cita` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cita" DROP COLUMN "date",
ADD COLUMN     "hour" TEXT NOT NULL,
DROP COLUMN "start",
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;
