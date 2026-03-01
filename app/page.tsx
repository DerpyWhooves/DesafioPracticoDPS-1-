export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-black text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">Tienda Tech</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">Inicio</a>
          <a href="/productos" className="hover:text-gray-300">Productos</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-4xl font-bold mb-4">
          Bienvenido a Tienda Tech 🚀
        </h2>
        <p className="text-gray-600">
          Tu tienda de tecnología favorita
        </p>
      </section>
    </main>
  );
}