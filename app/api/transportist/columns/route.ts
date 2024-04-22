import { NextResponse } from "next/server";
import { transportistColumns } from "./data";

export function GET() {
  try {
    const columns = transportistColumns;

    return NextResponse.json({
      status: 200,
      result: columns,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
