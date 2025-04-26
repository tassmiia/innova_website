"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({
    marutAir: 0,
    atlasCopco: 0,
    airaIndia: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const companies = ["marut-air", "atlas-copco", "aira-india"];
      const results = await Promise.all(
        companies.map((company) =>
          fetch(`/api/admin/products/count?company=${company}`).then((res) =>
            res.json()
          )
        )
      );

      setCounts({
        marutAir: results[0].count,
        atlasCopco: results[1].count,
        airaIndia: results[2].count,
      });
    };

    fetchCounts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card title="Marut Air" count={counts.marutAir} />
        <Card title="Atlas Copco" count={counts.atlasCopco} />
        <Card title="Aira India" count={counts.airaIndia} />
      </div>
    </div>
  );
}

function Card({ title, count }: { title: string; count: number }) {
  return (
    <div className="bg-white shadow p-6 rounded text-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-4xl font-bold text-blue-600">{count}</p>
      <p className="text-gray-500 mt-1">Products</p>
    </div>
  );
}
