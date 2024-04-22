import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const { name, phone, email, dni, nit } = await request.json();

  try {
    const updatedProvider = await prisma.provider.update({
      where: { id },
      include: {
        person: true,
      },
      data: {
        nit,
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
      result: updatedProvider,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = params;

  try {
    await prisma.provider.delete({ where: { id } });
    const newData = await prisma.provider.findMany({
      include: {
        person: true,
      },
    });

    return NextResponse.json({
      status: 200,
      result: newData.map((provider) => ({
        dni: provider.dni,
        name: provider.person.name,
        phone: provider.person.phone.join(" "),
        email: provider.person.email.join(" "),
        nit: provider.nit,
      })),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
