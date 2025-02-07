import Pizza from "@/components/Pizzas/Item";
import { Suspense } from "react";


async function PaginaPizza({ params, searchParams }) {
    const { id } = await params


    return (
        <div>
            <h1>DATOS DE PIZZA</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Pizza id={id} />
            </Suspense>
        </div>
    )


}


export default PaginaPizza;
