import { insertarPedido } from "@/lib/actions";


function PedidoInsertar({ repartidores }) {
    return (
        <form action={insertarPedido}>
            <input name="nombre_cliente" placeholder="Nombre del cliente" />
            <input name="fecha_hora" type='date' />
            <input name="direccion_cliente" placeholder="Direccion" />



            <select name="repartidorId">
                {
                    repartidores.map(repartidor =>
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    )
                }
            </select>


            <button className="border-2 border-black" >Insertar pedido</button>
        </form>
    );
}


export default PedidoInsertar;