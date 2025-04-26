import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// GET products by company (e.g., /api/products?company=marut-air)
export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("INNOVAdb");

    const url = new URL(req.url);
    const company = url.searchParams.get("company");

    const filter = company ? { company } : {}; // Filter by company if provided

    const products = await db.collection("products").find(filter).toArray();

    return NextResponse.json(products);
  } catch (err) {
    console.error("MongoDB Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST: Add a new product with company field
export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("INNOVAdb");

    const body = await req.json();

    // Basic validation
    if (
      !body.name ||
      !body.description ||
      !body.price ||
      !body.image ||
      !body.company
    ) {
      return NextResponse.json(
        { error: "Missing required product fields." },
        { status: 400 }
      );
    }

    const result = await db.collection("products").insertOne(body);

    return NextResponse.json({
      message: "Product added successfully",
      id: result.insertedId,
    });
  } catch (err) {
    console.error("MongoDB Insert Error:", err);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}
