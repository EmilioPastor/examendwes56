import { obtenerPizza } from "@/lib/data";
import { notFound } from "next/navigation";


export default async function Pizza({ id }) {
    const pizza = await obtenerPizza(id)
    // console.log(pizza);


    if (!pizza) notFound()


    return (
        <div>
            <p> Id:  {pizza.id} </p>
            <p> Nombre de pizza:  {pizza.nombre} </p>
            <p> Precio: {pizza.precio} </p>
            <p>
                Pedidos:  {
                    pizza.pedidos.map(pedido =>
                        <div key={pedido.id}>
                            <p>{pedido.nombre}</p>
                        </div>)
                }
            </p>
             


        </div>
    );
}
