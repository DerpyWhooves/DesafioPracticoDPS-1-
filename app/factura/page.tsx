"use client";
import { useStore } from "../context/StoreContext";

export default function Factura() {
  const { cart, clearCart } = useStore();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Factura</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}

      <hr className="my-4" />
      <h3 className="font-bold">Total: ${total}</h3>

      <button
        onClick={() => {
          alert("Compra realizada con éxito");
          clearCart();
        }}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Finalizar Compra
      </button>
    </div>
  );
}