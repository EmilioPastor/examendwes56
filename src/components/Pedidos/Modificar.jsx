import { modificarPedido } from "@/lib/actions";


function PedidoModificar({ pedido, repartidores }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre_cliente' defaultValue={pedido.nombre_cliente} placeholder="Nombre.."/>
            <input name='direccion_cliente' defaultValue={pedido.direccion_cliente} placeholder="Direccion.."/>
            <input name='fecha_hora' type='date' defaultValue={pedido.fecha_hora.toISOString().split('T')[0]} />

            {/* SACAR REPARTIDORES CON EL SELECT */}
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