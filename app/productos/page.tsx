"use client";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";

export default function Productos() {
  const { addToCart } = useStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white rounded-lg shadow p-4">
          <img src={p.image} className="rounded mb-3 w-full" />
          <h3 className="font-bold">{p.name}</h3>
          <p className="text-blue-600 font-semibold">${p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
}