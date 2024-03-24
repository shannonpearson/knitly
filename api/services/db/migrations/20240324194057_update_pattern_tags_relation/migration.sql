/*
  Warnings:

  - You are about to drop the `AssignedPatternTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssignedPatternTag" DROP CONSTRAINT "AssignedPatternTag_patternId_fkey";

-- DropForeignKey
ALTER TABLE "AssignedPatternTag" DROP CONSTRAINT "AssignedPatternTag_tagId_fkey";

-- AlterTable
ALTER TABLE "Pattern" ALTER COLUMN "meterage" SET DEFAULT ARRAY[]::INTEGER[],
ALTER COLUMN "needleSize" DROP NOT NULL,
ALTER COLUMN "colorCount" DROP NOT NULL,
ALTER COLUMN "attributes" SET DEFAULT ARRAY[]::"Attribute"[];

-- DropTable
DROP TABLE "AssignedPatternTag";

-- CreateTable
CREATE TABLE "_PatternToPatternTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PatternToPatternTag_AB_unique" ON "_PatternToPatternTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PatternToPatternTag_B_index" ON "_PatternToPatternTag"("B");

-- AddForeignKey
ALTER TABLE "_PatternToPatternTag" ADD CONSTRAINT "_PatternToPatternTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Pattern"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatternToPatternTag" ADD CONSTRAINT "_PatternToPatternTag_B_fkey" FOREIGN KEY ("B") REFERENCES "PatternTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
