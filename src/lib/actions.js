
'use server'
import { revalidatePath } from 'next/cache'


import prisma from '@/lib/prisma'






//  ------------------------ REPARTIDORES ------------------------




export async function insertarRepartidor(formData) {
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')


    await prisma.repartidor.create({
        data: {
            nombre: nombre,
            telefono: telefono
        }
    })


    revalidatePath('/repartidores')


}






export async function modificarRepartidor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')




    await prisma.repartidor.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            telefono: telefono
        }
    })


    revalidatePath('/repartidores')
}






export async function eliminarRepartidor(formData) {
    const id = Number(formData.get('id'))


    await prisma.repartidor.delete({
        where: {
            id: id
        }
    })


    revalidatePath('/repartidores')


}




//  ------------------------ PEDIDOS ------------------------




export async function insertarPedido(prevState,formData) {
    const nombre_cliente = formData.get('nombre_cliente')
    const direccion_cliente = formData.get('direccion_cliente')
    const fecha_hora = new Date(formData.get('fecha_hora'))


    // SE USA AHORA PARA SACAR EL ID DEL REPARTIDOR
    const repartidorId = Number(formData.get('repartidorId'))


    await prisma.pedido.create({
        data: {
            nombre_cliente: nombre_cliente,
            direccion_cliente: direccion_cliente,
            fecha_hora: fecha_hora,
            // SE USA AHORA PARA SACAR EL ID DEL REPARTIDOR
            repartidorId: repartidorId
        }
    })


    revalidatePath('/pedidos')
    return {success: 'Exito al registrar el pedido'}


}



export async function modificarPedido(prevState,formData) {
    const id = Number(formData.get('id'))
    const nombre_cliente = formData.get('nombre_cliente')
    const direccion_cliente = formData.get('direccion_cliente')
    const fecha_hora = new Date(formData.get('fecha_hora'))

    // SE USA AHORA PARA SACAR EL ID DEL REPARTIDOR
    const repartidorId = Number(formData.get('repartidorId'))


    await prisma.pedido.update({
        where: {
            id: id
        },
        data: {
            nombre_cliente: nombre_cliente,
            direccion_cliente: direccion_cliente,
            fecha_hora: fecha_hora,
            // SE USA AHORA PARA SACAR EL ID DEL REPARTIDOR
            repartidorId: repartidorId
        }
    })


    revalidatePath('/pedidos')
    return {success: 'Exito al modificar el pedido'}

}



export async function eliminarPedido(prevState,formData) {
    const id = Number(formData.get('id'))


    await prisma.pedido.delete({
        where: {
            id: id
        }
    })


    revalidatePath('/pedidos')
    return {success: 'Exito al eliminar el paciente'}


}


// ------------------------------- PIZZAS -----------------------


export async function insertarPizza(formData) {
    const nombre = formData.get('nombre')
    const precio = parseFloat(formData.get('precio')); 

    await prisma.pizza.create({
        data: {
            nombre: nombre,
            precio: precio
        }
    })


    revalidatePath('/pizzas')


}



export async function modificarPizza(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const precio = parseFloat(formData.get('precio')); 

    await prisma.pizza.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            precio: precio
        }
    })


    revalidatePath('/pizzas')
}


export async function eliminarPizza(formData) {
    const id = Number(formData.get('id'))


    await prisma.pizza.delete({
        where: {
            id: id
        }
    })


    revalidatePath('/pizzas')


}


