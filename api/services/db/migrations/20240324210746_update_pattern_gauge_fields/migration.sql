/*
  Warnings:

  - You are about to drop the column `rowGauge` on the `Pattern` table. All the data in the column will be lost.
  - You are about to drop the column `stitchGauge` on the `Pattern` table. All the data in the column will be lost.
  - The `needleSize` column on the `Pattern` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pattern" DROP COLUMN "rowGauge",
DROP COLUMN "stitchGauge",
ADD COLUMN     "gaugeRows" INTEGER,
ADD COLUMN     "gaugeSizeInCm" INTEGER,
ADD COLUMN     "gaugeStitches" INTEGER,
DROP COLUMN "needleSize",
ADD COLUMN     "needleSize" DOUBLE PRECISION[] DEFAULT ARRAY[]::DOUBLE PRECISION[];
