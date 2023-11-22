/*
  Warnings:

  - The primary key for the `users_products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserBenefits` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_products" (
    "ownerId" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    CONSTRAINT "users_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "users_products_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users_products" ("ownerId", "productId") SELECT "ownerId", "productId" FROM "users_products";
DROP TABLE "users_products";
ALTER TABLE "new_users_products" RENAME TO "users_products";
CREATE TABLE "new_UserBenefits" (
    "benefitId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "UserBenefits_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "benefits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserBenefits_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserBenefits" ("benefitId", "ownerId") SELECT "benefitId", "ownerId" FROM "UserBenefits";
DROP TABLE "UserBenefits";
ALTER TABLE "new_UserBenefits" RENAME TO "UserBenefits";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
