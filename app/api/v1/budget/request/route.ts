import BudgetRequestController from "@/app/modules/finance/budget/controllers/BudgetRequestController";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    return BudgetRequestController.post(request);
} 

export async function GET(request: NextRequest) {
    return NextResponse.json({
        message: "It works",
        status: "success",
    }, { status: 200 });
}