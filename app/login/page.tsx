"use client";
import { useState } from "react";
import { users } from "../data/users";
import { useStore } from "../context/StoreContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useStore();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      login(found.username);
      router.push("/productos");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        className="w-full border p-2 mb-3"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full border p-2 mb-3"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Ingresar
      </button>
    </div>
  );
}