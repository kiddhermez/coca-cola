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

export async function DELETE(request: Request, { params }: Params) {
  const { id } = params;

  try {
    await prisma.employee.delete({ where: { id } });
    const newData = await prisma.employee.findMany({
      include: { person: true },
    });

    return NextResponse.json({
      status: 200,
      result: newData.map((employee) => ({
        dni: employee.dni,
        name: employee.person.name,
        phone: employee.person.phone.join(" "),
        email: employee.person.email.join(" "),
        age:
          new Date().getFullYear() - new Date(employee.bornDate).getFullYear(),
        salary: employee.salary,
      })),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
