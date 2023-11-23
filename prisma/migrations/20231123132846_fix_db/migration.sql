/*
  Warnings:

  - Added the required column `info` to the `UserBenefits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping` to the `UserBenefits` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserBenefits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shipping" BOOLEAN NOT NULL,
    "info" TEXT NOT NULL,
    "benefitId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "UserBenefits_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "benefits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserBenefits_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserBenefits" ("benefitId", "id", "ownerId") SELECT "benefitId", "id", "ownerId" FROM "UserBenefits";
DROP TABLE "UserBenefits";
ALTER TABLE "new_UserBenefits" RENAME TO "UserBenefits";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
