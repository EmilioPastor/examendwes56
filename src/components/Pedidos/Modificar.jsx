import { modificarPedido } from "@/lib/actions";


function PedidoModificar({ pedido, repartidores }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre' defaultValue={pedido.nombre} />
            <input name='fecha_nacimiento' type='date' defaultValue={pedido.fecha_nacimiento.toISOString().split('T')[0]} />



            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}


export default PedidoModificar;