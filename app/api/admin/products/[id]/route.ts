// app/api/admin/products/[id]/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Fetch product by ID (GET)
export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db("INNOVAdb");

    // Find product by ID
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(params.id) });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product); // Return the product as JSON
  } catch (err) {
    console.error("Error fetching product:", err);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

// Update product by ID (POST or PUT)
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json(); // Get the updated data from request body
    const client = await clientPromise;
    const db = client.db("INNOVAdb");

    // Update the product by its ID
    const result = await db.collection("products").updateOne(
      { _id: new ObjectId(params.id) }, // Match by product ID
      { $set: body } // Update with new data
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: "Product not updated" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Product updated successfully" });
  } catch (err) {
    console.error("Error updating product:", err);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

// Delete product by ID (DELETE)
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("INNOVAdb");

    // Delete product by ID
    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
