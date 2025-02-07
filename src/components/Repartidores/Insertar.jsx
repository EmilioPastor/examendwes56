import { insertarRepartidor } from "@/lib/actions";


function RepartidorInsertar() {
    return (
        <form action={insertarRepartidor}>
            <input name="nombre" placeholder="Nombre" />
            <input name="telefono" placeholder="telefono" />
            <button className="border-2 border-black">Insertar repartidor</button>
        </form>


    );
}


export default RepartidorInsertar;
