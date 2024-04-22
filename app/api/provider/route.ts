import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "") || 1;
  const limit = parseInt(searchParams.get("limit") ?? "") || 10;

  try {
    const providers = await prisma.provider.findMany({
      include: { person: true },
    });
    const data = providers.slice((page - 1) * limit, page * limit);
    const total = providers.length;

    return NextResponse.json({
      status: 200,
      result: {
        data: data.map((provider) => ({
          dni: provider.dni,
          name: provider.person.name,
          phone: provider.person.phone.join(" "),
          email: provider.person.email.join(" "),
          nit: provider.nit,
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
  const { dni, name, phone, email, nit } = await request.json();
  try {
    const newProvider = await prisma.provider.create({
      data: {
        nit,
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
      result: newProvider,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
