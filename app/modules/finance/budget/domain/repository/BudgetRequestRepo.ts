import PrismaSingleton from '@/app/lib/prisma'
import BudgetRequest from '../entities/BudgetRequest'

const prisma = PrismaSingleton.getInstance();

class BudgetRequestRepo {

    async setBudgetRequest(budgetRequest: BudgetRequest) {
        return await prisma.$transaction(async (tx) => {
            const budgetPlan = await tx.budgetPlan.create({
                data: {
                    tag: budgetRequest.budget.budgetPlan.tag,
                    description: budgetRequest.budget.budgetPlan.description,
                }
            });

            const budget = await tx.budget.create({
                data: {
                    amount: budgetRequest.budget.amount,
                    // budgetCode: budgetRequest.budget.budgetCode,
                    budgetPlanId: budgetPlan.id,
                }
            });

            return tx.budgetRequest.create({
                data: {
                    uuid: budgetRequest.id,
                    budgetId: budget.id,
                    requestTime: budgetRequest.requestTime,
                },
            });
        });
    }

    async updateBudgetRequest(budgetRequest: BudgetRequest) {
        return await prisma.budgetRequest.update({
            where: { uuid: budgetRequest.id },
            data: {
                budget: {
                    update: {
                        amount: budgetRequest.budget.amount,
                        budgetPlan: {
                            update: {
                                tag: budgetRequest.budget.budgetPlan.tag,
                                description: budgetRequest.budget.budgetPlan.description,
                            }
                        }
                    }
                },
                requestTime: budgetRequest.requestTime,
            }
        });
    }
}

export default BudgetRequestRepo;