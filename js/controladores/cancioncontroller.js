function cancionController(servicio) {
    return {
        canciones: [],
        cancionesFiltradas: [], 
        criterio: '',
        cancionActual: null,
        cargando: false,

        async init() {
            this.cargando = true;
            this.canciones = await servicio.obtenerCanciones();
            this.cancionesFiltradas = []; 
            this.cargando = false;
        },

        buscar() {
            const texto = this.criterio.toLowerCase().trim();
            if (!texto) {
                this.cancionesFiltradas = [];
                this.cancionActual = null;
                return;
            }

            
            this.cancionesFiltradas = this.canciones.filter(c => {
                if (c.id.toString() === texto) {
                    return true;
                }

                const coincideTitulo = c.titulo.toLowerCase().includes(texto);
                const coincideArtista = c.artista.toLowerCase().includes(texto);
                const esNumero = !isNaN(texto);
                if (esNumero) {
                    return c.id.toString() === texto;
                }

                return coincideTitulo || coincideArtista;
            });
            if (this.cancionesFiltradas.length > 0) {
                this.reproducir(this.cancionesFiltradas[0]);
            }
        },

        reproducir(cancion) {
            this.cancionActual = cancion;
        }
    };
}