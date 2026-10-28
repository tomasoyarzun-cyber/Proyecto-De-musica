class LocalStorageCancionRepository extends CancionRepository {
    async listar() {
        const cancionesGuardadas = localStorage.getItem('canciones');
        if (!cancionesGuardadas) {
            const catalogoInicial = [
                { 
                    id: 1, 
                    titulo: "Let's Groove", 
                    artista: "Earth, Wind & Fire", 
                    genero: "Funk/post-disco/pop/synth-funk", 
                    anio: 1981, 
                    src: "cancion/1.mp3" 
                },
                { 
                    id: 2, 
                    titulo: "Sonic Mania: Studiopolis ACT 1", 
                    artista: "Tee Lopes", 
                    genero: "Synth Funk", 
                    anio: 2017, 
                    src: "cancion/2.mp3" 
                },
                {
                    id: 3, 
                    titulo: "Teknopathetic", 
                    artista: "Hideki Naganuma", 
                    genero: "Synth Funk", 
                    anio: 2001, 
                    src: "cancion/3.mp3" 

                }
            ];
            localStorage.setItem('canciones', JSON.stringify(catalogoInicial));
            return catalogoInicial;
        }
        return JSON.parse(cancionesGuardadas);
    }
}