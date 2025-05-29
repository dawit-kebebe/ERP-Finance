import Budget from "../entities/Budget";
import BudgetRequest from "../entities/BudgetRequest";
import BudgetRequestRepo from "../repository/BudgetRequestRepo";

interface BudgetPlanData {
    tag: string;
    description: string;
}

interface BudgetData {
    amount: number;
    budgetPlan: BudgetPlanData;
}

interface BudgetRequester {
    id: string;
    role: string;
}

interface InitialBudgetRequestData {
    budget: BudgetData;
    requestTime: Date;
    user: BudgetRequester;
}

class BudgetRequestWorkflow {
    setBudgetRequest(initialBudgetRequest: InitialBudgetRequestData): Promise<any> {
        const budget = Budget.deserialize({
            ...initialBudgetRequest.budget,
            budgetCode: ''
        });

        const budgetRequest = new BudgetRequest(
            crypto.randomUUID(),
            budget,
            initialBudgetRequest.user,
            initialBudgetRequest.requestTime
        );

        const budgetRequestRepo = new BudgetRequestRepo();
        return budgetRequestRepo.setBudgetRequest(budgetRequest);
    }
}

export default BudgetRequestWorkflow;