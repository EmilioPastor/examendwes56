import Modal from "@/components/Modal";
import { obtenerPizzas, obtenerPedidos } from "@/lib/data";
import PizzaEliminar from "./Eliminar";
import PizzaModificar from "./Modificar";
import PizzaInsertar from "./Insertar";
import Link from "next/link";

export default async function Pizzas() {
    const pizzas = await obtenerPizzas()
    const pedidos = await obtenerPedidos()

    return (

        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar pizza</p>}>
                <PizzaInsertar pedidos={pedidos} />
            </Modal>

            {
                pizzas.map(pizza =>
                    <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pizzas/${pizza.id}`} className="text-2xl block">
                                {pizza.nombre}
                            </Link>
                            <p>{pizza.precio}</p>
                        </div>


                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PizzaModificar pizza={pizza} pedidos={pedidos} />
                        </Modal>


                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PizzaEliminar pizza={pizza} />
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
