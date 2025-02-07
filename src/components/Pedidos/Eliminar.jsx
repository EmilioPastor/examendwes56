'use client'
import { eliminarPedido } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function PedidoEliminar({ pedido }) {

    const formId = useId();

    const [state, action, pending] = useActionState(eliminarPedido, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);


    return (
        <>
            <h1 className="text-2xl text-red-600">¿Está seguro que desea eliminar los siguentes datos?</h1>
            <p>Cliente: {pedido.nombre_cliente}</p>
            <p>Direccion: {pedido.direccion_cliente}</p>
            <p>Fecha pedido: {pedido.fecha_hora.toLocaleDateString()}</p>

            <form action={action} id={formId}>
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button
                    disabled={pending}
                    className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                    {pending ? "Eliminando..." : "Eliminar pedido"}
                </button>
            </form>
        </>
    );
}


export default PedidoEliminar;
