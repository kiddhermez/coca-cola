/// <reference lib="dom" />

import { test, expect, describe } from "bun:test";
import { GET, POST } from "@/app/api/rawMaterial/route";
import { NextRequest } from "next/server";

describe("Backend", () => {
  test("should get the items (Raw Materials)", () => {
    const data = GET({
      nextUrl: {
        searchParams: new URLSearchParams(),
      },
    } as NextRequest);
    expect(data as any).toBeObject();
  });

  test("should create a new item (Raw Material)", () => {
    const data = POST({
      json: async () => ({
        name: "Test",
        quantity: 10,
        unit: "kg",
        price: 10,
      }),
    } as Request);
    expect(data as any).toBeObject();
  });
});
