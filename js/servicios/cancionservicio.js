class CancionServicio {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    async obtenerCanciones() {
        return await this.repositorio.listar();
    }
}