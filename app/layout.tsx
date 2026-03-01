import "./globals.css";
import Link from "next/link";
import { StoreProvider } from "./context/StoreContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <StoreProvider>
          <nav className="bg-white shadow-md p-4 flex justify-between">
            <h1 className="text-xl font-bold text-blue-600">TechStore</h1>
            <div className="space-x-4">
              <Link href="/">Inicio</Link>
              <Link href="/productos">Productos</Link>
              <Link href="/carrito">Carrito</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
          <main className="p-6 max-w-6xl mx-auto">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}