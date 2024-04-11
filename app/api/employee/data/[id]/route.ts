import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const { name, phone, email, dni, born_date, salary } = await request.json();

  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id },
      include: {
        person: true,
      },
      data: {
        bornDate: new Date(born_date),
        salary,
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
      result: updatedEmployee,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE({ params }: Params) {
  const { id } = params;

  try {
    await prisma.employee.delete({ where: { id } });

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
