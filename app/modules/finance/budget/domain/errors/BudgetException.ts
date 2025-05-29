export class BudgetException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'BudgetException';
        Object.setPrototypeOf(this, BudgetException.prototype);
    }
}