import { obtenerPizzas } from "@/lib/data";
import Link from "next/link";

export default async function Pizzas() {
    const pizzas = await obtenerPizzas()
    //console.log(pizzas);
    return (
        <div>


            {
                pizzas.map(pizza =>
                    <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pizzas/${pizza.id}`} className="text-2xl block">
                                {pizza.nombre}
                            </Link>
                            <p>{pizza.precio}</p>
                        </div>




                        <hr />
                    </div>
                )
            }
        </div>
    );
}
