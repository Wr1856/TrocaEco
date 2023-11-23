-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserBenefits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shipping" BOOLEAN NOT NULL DEFAULT false,
    "info" TEXT NOT NULL DEFAULT 'Aguardando atualizacao',
    "benefitId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "UserBenefits_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "benefits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserBenefits_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserBenefits" ("benefitId", "id", "info", "ownerId", "shipping") SELECT "benefitId", "id", "info", "ownerId", "shipping" FROM "UserBenefits";
DROP TABLE "UserBenefits";
ALTER TABLE "new_UserBenefits" RENAME TO "UserBenefits";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
