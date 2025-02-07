'use client'
import { insertarPedido } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function PedidoInsertar({ repartidores }) {

    const formId = useId();

    const [state, action, pending] = useActionState(insertarPedido, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <form action={action} id={formId}>
            <input name="nombre_cliente" placeholder="Nombre del cliente" />
            <input name="fecha_hora" type='date' />
            <input name="direccion_cliente" placeholder="Direccion" />


            {/* SACAR REPARTIDORES CON EL SELECT */}
            <select name="repartidorId">
                {
                    repartidores.map(repartidor =>
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    )
                }
            </select>

            <button
                disabled={pending}
                className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
                {pending ? "Insertando..." : "Insertar pedido"}
            </button>
        </form>
    );
}


export default PedidoInsertar;