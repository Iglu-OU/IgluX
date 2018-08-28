export function registerSW() {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((i) => i).catch((i) => i);
    });
}
