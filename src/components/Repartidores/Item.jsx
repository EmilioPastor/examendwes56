import { obtenerRepartidor } from "@/lib/data";
import { notFound } from "next/navigation";


export default async function Repartidor({ id }) {
    const repartidor = await obtenerRepartidor(id)
    //console.log(repartidor);


    if (!repartidor) notFound()


    return (
        <div>
            <p>Nombre: {repartidor.nombre} </p>
            <p>Id:  {repartidor.id} </p>
            <p>Telefono: {repartidor.telefono} </p>
        </div>
    );
}
