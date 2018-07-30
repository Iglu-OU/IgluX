//This is the "Offline copy of pages" service worker

//Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
    console.log('[PWA] active service worker found, no need to register');
} else {
    //Register the ServiceWorker
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js');
    });
}
