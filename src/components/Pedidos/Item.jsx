import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";


export default async function Pedido({ id }) {
    const pedido = await obtenerPedido(id)
    //console.log(pedido);


    if (!pedido) notFound()


    return (
        <div>
            <p>Id:  {pedido.id} </p>
            <p>Nombre Cliente: {pedido.nombre_cliente} </p>
            <p>Direccion: {pedido.direccion_cliente} </p>
            <p>Fecha: {pedido.fecha_hora.toLocaleDateString()} </p>
            <p>Repartidor: {pedido.repartidor?.nombre} </p>

        </div>
    );
}
