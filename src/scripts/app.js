import ServiceWorkerRegistrar from './lib/sw-registrar';

export default dependencies => {
    console.log('Hello World', dependencies.get('styles'));

    ServiceWorkerRegistrar.onUpdateAvailable(() => {
        console.log('Update Available');
        document.querySelector('h1').addEventListener('click', function() {
            ServiceWorkerRegistrar.applyUpdates();
        });
    });
};
