"use client";
import { useStore } from "../context/StoreContext";
import Link from "next/link";

export default function Carrito() {
  const { cart, removeFromCart, clearCart } = useStore();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex items-center bg-white p-3 mb-3 rounded shadow">
          <img src={item.image} className="w-20 mr-4 rounded" />
          <div className="flex-1">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            X
          </button>
        </div>
      ))}

      <h3 className="font-bold mt-4">Total: ${total}</h3>

      <div className="space-x-4 mt-4">
        <button onClick={clearCart} className="bg-yellow-500 px-4 py-2 rounded">
          Vaciar
        </button>

        <Link href="/factura" className="bg-blue-600 text-white px-4 py-2 rounded">
          Comprar
        </Link>
      </div>
    </div>
  );
}