import Budget from "./Budget";
import User from "../../../user/controllers/entities/User";

class BudgetRequest {
    private _id: string;
    private _budget: Budget;
    private _user: User;
    private _requestTime: Date;
    
    constructor(
        id: string,
        budget: Budget,
        user: User,
        requestTime: Date
    ) {
        this._id = id;
        this._budget = budget;
        this._user = user;
        this._requestTime = requestTime;
    }
    

    public get budget(): Budget {
        return this._budget;
    }

    public set budget(value: Budget) {
        this._budget = value;
    }

    public get user(): User {
        return this._user;
    }

    public set user(value: User) {
        this._user = value;
    }


    public get requestTime(): Date {
        return this._requestTime;
    }

    public set requestTime(value: Date) {
        this._requestTime = value;
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }
}

export default BudgetRequest;