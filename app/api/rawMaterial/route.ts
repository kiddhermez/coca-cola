import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "") || 1;
  const limit = parseInt(searchParams.get("limit") ?? "") || 10;

  try {
    const rawMaterials = await prisma.rawMaterial.findMany();
    const data = rawMaterials.slice((page - 1) * limit, page * limit);
    const total = rawMaterials.length;

    return NextResponse.json({
      status: 200,
      result: {
        data: data.map((rawMaterial) => ({
          id: rawMaterial.id,
          name: rawMaterial.name,
          quantity: rawMaterial.quantity,
          unit: rawMaterial.unit,
          price: rawMaterial.price,
        })),
        total,
        page,
        limit,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { name, quantity, unit, price } = await request.json();
  try {
    const newMaterial = await prisma.rawMaterial.create({
      data: {
        name,
        quantity,
        unit,
        price,
      },
    });

    return NextResponse.json({
      status: 200,
      result: newMaterial,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
