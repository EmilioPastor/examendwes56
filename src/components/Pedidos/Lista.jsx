import Modal from "@/components/Modal";
import { obtenerPedidos, obtenerRepartidores } from "@/lib/data";
import PedidoInsertar from "./Insertar";
import PedidoEliminar from "./Eliminar";
import PedidoModificar from "./Modificar";
import Link from "next/link";
export default async function Pedidos() {
    const pedidos = await obtenerPedidos()
    const repartidores = await obtenerRepartidores()

    //console.log(pedidos);
    return (
        <div>


            <Modal openElement={<p className="inline border-2 border-black">Insertar pedido</p>}>
                <PedidoInsertar repartidores={repartidores} />
            </Modal>

            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pedidos/${pedido.id}`} className="text-2xl block">
                                {pedido.nombre}
                            </Link>
                            <p>{pedido.fecha_hora.toLocaleDateString()}</p>
                            <p>{pedido.direccion_cliente}</p>
                            <p>{pedido.nombre_cliente}</p>
                        </div>
                        
                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PedidoModificar pedido={pedido} repartidores={repartidores} />
                        </Modal>


                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PedidoEliminar pedido={pedido} />
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
