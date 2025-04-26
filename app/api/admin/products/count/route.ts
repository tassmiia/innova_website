import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("INNOVAdb");

    const url = new URL(req.url);
    const company = url.searchParams.get("company");

    if (!company) {
      return NextResponse.json({ count: 0 });
    }

    const count = await db.collection("products").countDocuments({ company });

    return NextResponse.json({ count });
  } catch (err) {
    console.error("MongoDB Count Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch product count" },
      { status: 500 }
    );
  }
}
