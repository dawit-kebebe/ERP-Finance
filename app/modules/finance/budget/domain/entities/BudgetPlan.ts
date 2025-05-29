import { BudgetException } from "../errors/BudgetException";

class BudgetPlan {
    private _tag: string;
    private _description: string;

    constructor(tag: string = '', description: string = '') {
        this._tag = tag;
        this._description = description;
    }


    public get description(): string {
        return this._description;
    }

    public set description(value: string ) {
        this._description = value;
    }

    public get tag(): string {
        return this._tag;
    }
    public set tag(value: string) {
        this._tag = value;
    }

    serialize(): Record<string, any> {
        return {
            tag: this._tag,
            description: this._description
        };
    }

    static deserialize(data: Record<string, any>): BudgetPlan {
        if (!data || typeof data.tag !== 'string' || typeof data.description !== 'string') {
            throw new BudgetException(
                'Invalid data for BudgetPlan deserialization'
            );
        }
        
        const budgetPlan = new BudgetPlan();
        budgetPlan.tag = data.tag;
        budgetPlan.description = data.description;

        return budgetPlan;
    }
}

export default BudgetPlan;