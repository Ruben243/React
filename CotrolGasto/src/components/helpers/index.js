export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const formatearFecha = (fecha) => {
    const fechaFormat = new Date(fecha);
    const opcionesConfig = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return fechaFormat.toLocaleDateString('es-ES', opcionesConfig);
}

export const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    })

}