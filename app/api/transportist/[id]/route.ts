import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const { name, phone, email, dni, license } = await request.json();

  try {
    const updatedTransportist = await prisma.transportist.update({
      where: { id },
      include: {
        person: true,
      },
      data: {
        license,
        person: {
          update: {
            name,
            phone,
            email,
            dni,
          },
        },
      },
    });

    return NextResponse.json({
      status: 200,
      result: updatedTransportist,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = params;

  try {
    await prisma.transportist.delete({ where: { id } });

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
