import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "") || 1;
  const limit = parseInt(searchParams.get("limit") ?? "") || 10;

  try {
    const employees = await prisma.employee.findMany({
      include: { person: true },
    });
    const data = employees.slice((page - 1) * limit, page * limit);
    const total = employees.length;

    return NextResponse.json({
      status: 200,
      result: {
        data: data.map((provider) => ({
          dni: provider.dni,
          name: provider.person.name,
          phone: provider.person.phone,
          email: provider.person.email,
          age:
            new Date().getFullYear() -
            new Date(provider.bornDate).getFullYear(),
          salary: provider.salary,
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
  const { dni, name, phone, email, born_date, salary } = await request.json();
  try {
    const newEmployee = await prisma.employee.create({
      data: {
        bornDate: new Date(born_date),
        salary,
        person: {
          create: {
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
      result: newEmployee,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
