import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import * as yup from 'yup';
import BudgetRequestWorkflow from "../domain/workflow/BudgetRequestWorkflow";

const budgetRequestSchema = yup.object({
    budget: yup.object({
        amount: yup.number().required(),
        budgetPlan: yup.object({
            tag: yup.string().required(),
            description: yup.string().required()
        }).required(),
    }).required(),
    requestTime: yup.date().required(),
});

class BudgetRequestController {
    static async post(req: NextRequest) {
        const session = await getServerSession(authOptions);

        if (!session || !session.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { budgetRequest } = await req.json();

        try {
            const validatedBudgetRequest = await budgetRequestSchema.validate(budgetRequest, { abortEarly: false });

            const budgetRequestWorkflow = new BudgetRequestWorkflow();


            // const budget = Budget.deserialize({
            //     amount: validatedBudgetRequest.budget.amount,
            //     budgetCode: '', // Assuming budgetCode is generated or set later
            //     budgetedFor: {
            //         tag: validatedBudgetRequest.budget.budgetPlan.tag,
            //         description: validatedBudgetRequest.budget.budgetPlan.description
            //     }
            // });

            // const budgetRequestEntity = new BudgetRequest(
            //     crypto.randomUUID(),
            //     budget,
            //     {
            //         id: session.user.id,
            //         role: session.user.role
            //     },
            //     validatedBudgetRequest.requestTime
            // )
            const budgetRequester = {
                id: (session.user as any).id,
                role: (session.user as any).role
            };

            budgetRequestWorkflow.setBudgetRequest({
                ...validatedBudgetRequest,
                user: budgetRequester
            });

            return NextResponse.json({ message: "Budget request submitted successfully" }, { status: 201 });
        } catch (error) {
            console.log(error)
            if (error instanceof yup.ValidationError) {
                return NextResponse.json({ error: error.errors }, { status: 400 });
            }
            return NextResponse.json({ error: "Validation failed" }, { status: 500 });
        }
    }
}

export default BudgetRequestController;