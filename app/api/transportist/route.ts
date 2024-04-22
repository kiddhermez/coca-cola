import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "") || 1;
  const limit = parseInt(searchParams.get("limit") ?? "") || 10;

  try {
    const trasnportists = await prisma.transportist.findMany({
      include: { person: true },
    });
    const data = trasnportists.slice((page - 1) * limit, page * limit);
    const total = trasnportists.length;

    return NextResponse.json({
      status: 200,
      result: {
        data: data.map((transportist) => ({
          dni: transportist.dni,
          name: transportist.person.name,
          phone: transportist.person.phone.join(" "),
          email: transportist.person.email.join(" "),
          license: transportist.license,
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
  const { dni, name, phone, email, license } = await request.json();
  try {
    const newTransportist = await prisma.transportist.create({
      data: {
        license,
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
      result: newTransportist,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
