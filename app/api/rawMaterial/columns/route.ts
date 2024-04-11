import { NextResponse } from "next/server";
import { rawMaterialColumns } from "./data";

export function GET() {
  try {
    const columns = rawMaterialColumns;

    return NextResponse.json({
      status: 200,
      result: columns,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
