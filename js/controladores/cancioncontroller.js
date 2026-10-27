function cancionController(servicio){
    return{
        canciones: [],
        cargando: false,
        async init(){
            this.cargando = true;
            this.canciones = await servicio.obtenerCanciones();
            this.cargando = false;
        }
    }
}