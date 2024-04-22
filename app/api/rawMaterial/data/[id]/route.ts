import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const { name, quantity, unit, price } = await request.json();

  try {
    const updatedRawMaterial = await prisma.rawMaterial.update({
      where: { id },
      data: {
        name,
        quantity,
        unit,
        price,
      },
    });

    return NextResponse.json({
      status: 200,
      result: updatedRawMaterial,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE({ params }: Params) {
  const { id } = params;

  try {
    await prisma.rawMaterial.delete({ where: { id } });

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
