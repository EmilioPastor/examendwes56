import Repartidor from "@/components/Repartidores/Item";
import { Suspense } from "react";




async function PaginaRepartidor({ params, searchParams }) {
    const { id } = await params


    return (
        <div>
            <h1>DATOS DE REPARTIDOR</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Repartidor id={id} />
            </Suspense>
        </div>
    )


}


export default PaginaRepartidor