/*
  Warnings:

  - You are about to drop the column `budgetedForId` on the `Budget` table. All the data in the column will be lost.
  - Added the required column `budgetPlanId` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestTime` to the `BudgetRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Budget` DROP FOREIGN KEY `Budget_budgetedForId_fkey`;

-- DropIndex
DROP INDEX `Budget_budgetedForId_fkey` ON `Budget`;

-- AlterTable
ALTER TABLE `Budget` DROP COLUMN `budgetedForId`,
    ADD COLUMN `budgetPlanId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `BudgetRequest` ADD COLUMN `requestTime` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `Budget` ADD CONSTRAINT `Budget_budgetPlanId_fkey` FOREIGN KEY (`budgetPlanId`) REFERENCES `BudgetPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
