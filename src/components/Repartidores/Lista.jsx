import { obtenerRepartidores } from "@/lib/data";
import Link from "next/link";


export default async function Repartidores() {
    const repartidores = await obtenerRepartidores()
    //console.log(repartidores);
    return (
        <div>


            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/repartidores/${repartidor.id}`} className="text-2xl block">
                                {repartidor.nombre}
                            </Link>
                            <p>{repartidor.telefono}</p>
                        </div>




                        <hr />
                    </div>
                )
            }
        </div>
    );
}
