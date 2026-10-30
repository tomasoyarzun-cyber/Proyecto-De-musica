document.addEventListener('alpine:init', () => {
    const repo = new LocalStorageCancionRepository();
    const service = new CancionServicio(repo);

    Alpine.data('cancionData', () => cancionController(service));
});