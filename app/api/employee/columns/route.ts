import { NextResponse } from "next/server";
import { employeeColumns } from "./data";

export function GET() {
  try {
    const columns = employeeColumns;

    return NextResponse.json({
      status: 200,
      result: columns,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
