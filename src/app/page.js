import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href="/repartidores" className="block">REPARTIDORES</Link>
      <Link href="/pedidos" className="block">PEDIDOS</Link>
      <Link href="/pizzas" className="block">PIZZAS</Link>
    </div>
  );
}
