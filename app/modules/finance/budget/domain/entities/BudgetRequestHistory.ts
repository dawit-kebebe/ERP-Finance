import BudgetRequest from './BudgetRequest';

class BudgetRequestHistory {

    private _status: 'PENDING' | 'REVIEWING' | 'APPROVED' | 'REJECTED' | 'EDITED';
    private _budgetRequests: BudgetRequest[];

    public get status(): 'PENDING' | 'REVIEWING' | 'APPROVED' | 'REJECTED' | 'EDITED' {
        return this._status;
    }
    
    public set status(value: 'PENDING' | 'REVIEWING' | 'APPROVED' | 'REJECTED' | 'EDITED') {
        this._status = value;
    }

    public get budgetRequests(): BudgetRequest[] {
        return this._budgetRequests;
    }

    public set budgetRequests(value: BudgetRequest[]) {
        this._budgetRequests = value;
    }

    public addBudgetRequest(budgetRequest: BudgetRequest): void {
        if (!this._budgetRequests) {
            this._budgetRequests = [];
        }
        this._budgetRequests.push(budgetRequest);
    }

    public getTopBudgetRequest(): BudgetRequest | null {
        if (this._budgetRequests && this._budgetRequests.length > 0) {
            return this._budgetRequests[this._budgetRequests.length - 1];
        }
        return null;
    }

    constructor(status: 'PENDING' | 'REVIEWING' | 'APPROVED' | 'REJECTED' | 'EDITED', budgetRequests: BudgetRequest[] = []) {
        this._status = status;
        this._budgetRequests = budgetRequests;
    }

    
}

export default BudgetRequestHistory;