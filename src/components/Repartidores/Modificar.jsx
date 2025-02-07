import { modificarRepartidor } from "@/lib/actions";


function RepartidorModificar({ repartidor }) {
    return (
        <form action={modificarRepartidor}>
            <input type="hidden" name="id" defaultValue={repartidor.id} />
            <input name='nombre' defaultValue={repartidor.nombre} />
            <input name='telefono' defaultValue={repartidor.telefono} />
            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}


export default RepartidorModificar;