import { eliminarPedido } from "@/lib/actions";


function PedidoEliminar({ pedido }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Está seguro que desea eliminar los siguentes datos?</h1>
            <p>Cliente: {pedido.nombre_cliente}</p>
            <p>Direccion: {pedido.direccion_cliente}</p>
            <p>Fecha pedido: {pedido.fecha_hora.toLocaleDateString()}</p>

            <form action={eliminarPedido}>
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}


export default PedidoEliminar;
