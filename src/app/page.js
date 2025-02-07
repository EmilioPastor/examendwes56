import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Menú Principal</h1>
        
        <nav className="space-y-4">
          <Link
            href="/repartidores"
            className="block w-full px-4 py-3 bg-green-500 text-white rounded-lg text-lg font-medium shadow-md transition-all hover:bg-green-600 hover:scale-105"
          >
            REPARTIDORES
          </Link>
          
          <Link
            href="/pedidos"
            className="block w-full px-4 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium shadow-md transition-all hover:bg-blue-600 hover:scale-105"
          >
            PEDIDOS
          </Link>
          
          <Link
            href="/pizzas"
            className="block w-full px-4 py-3 bg-purple-500 text-white rounded-lg text-lg font-medium shadow-md transition-all hover:bg-purple-600 hover:scale-105"
          >
            PIZZAS
          </Link>
        </nav>
      </div>
    </div>
  );
}
