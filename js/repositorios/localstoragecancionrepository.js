class LocalStorageCancionRepository extends CancionRepository{
    async listar(){
        return JSON.parse(localStorage.getItem('canciones')) || [];
    }
}