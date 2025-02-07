import { modificarPedido } from "@/lib/actions";


function PedidoModificar({ pedido, repartidores }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre' defaultValue={pedido.nombre} />
            <input name='fecha_nacimiento' type='date' defaultValue={pedido.fecha_nacimiento.toISOString().split('T')[0]} />


            <select
                key={pedido.repartidorId}
                name="repartidorId"
                defaultValue={pedido.repartidorId}>
                {
                    repartidores.map(repartidor =>
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    )
                }
            </select>


            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}


export default PedidoModificar;