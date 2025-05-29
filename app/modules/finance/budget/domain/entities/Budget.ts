import { BudgetException } from "../errors/BudgetException";
import BudgetPlan from "./BudgetPlan";

class Budget {
    private _budgetCode: string;
    private _amount: number;
    private _budgetPlan: BudgetPlan;

    constructor(budgetCode: string, amount: number, budgetPlan: BudgetPlan) {
        this._budgetCode = budgetCode;
        this._amount = amount;
        this._budgetPlan = budgetPlan;
    }

    public get amount(): number {
        return this._amount;
    }

    public set amount(value: number) {
        this._amount = value;
    }

    public get budgetCode(): string {
        return this._budgetCode;
    }

    public set budgetCode(value: string) {
        this._budgetCode = value;
    }

    public get budgetPlan(): BudgetPlan {
        return this._budgetPlan;
    }

    public set budgetPlan(value: BudgetPlan) {
        this._budgetPlan = value;
    }

    serialize(): Record<string, any> {
        return {
            budgetCode: this._budgetCode,
            amount: this._amount,
            budgetPlan: this._budgetPlan.serialize()
        };
    }

    static deserialize(data: Record<string, any>): Budget {
        if (
            !data ||
            typeof data.budgetCode !== 'string' ||
            typeof data.amount !== 'number' ||
            !data.budgetPlan
        ) {
            throw new BudgetException('Invalid data for Budget deserialization');
        }

        const budgetPlan = BudgetPlan.deserialize(data.budgetPlan);

        return new Budget(data.budgetCode, data.amount, budgetPlan);
    }
}

export default Budget;