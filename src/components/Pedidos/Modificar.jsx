'use client'
import {  modificarPedido } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";
function PedidoModificar({ pedido, repartidores }) {

    const formId = useId();

    const [state, action, pending] = useActionState(modificarPedido, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <form action={action} id={formId}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre_cliente' defaultValue={pedido.nombre_cliente} placeholder="Nombre.." />
            <input name='direccion_cliente' defaultValue={pedido.direccion_cliente} placeholder="Direccion.." />
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

            <button
                disabled={pending}
                className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
                {pending ? "Modificando..." : "Modificar paciente"}
            </button>

        </form>
    );
}


export default PedidoModificar;