"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const companyFromURL = searchParams.get("company") || "marut-air"; // fallback

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    company: companyFromURL,
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, company: companyFromURL }));
  }, [companyFromURL]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: Number(form.price) }),
    });

    if (res.ok) {
      router.push(`/admin/${form.company}`); // redirect to the same company dashboard
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Add Product –{" "}
        <span className="capitalize">{form.company.replace("-", " ")}</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={form.image}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
