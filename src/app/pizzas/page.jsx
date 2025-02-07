import Pizzas from "@/components/Pizzas/Lista";
import { Suspense } from "react";

function PaginaPizzas() {


    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE PIZZAS</h1>


            <Suspense fallback={"Obteniendo pizza ..."}>
                <Pizzas />
            </Suspense>
        </div>
    )


}


export default PaginaPizzas;


