import ServiceWorkerRegistrar from './lib/sw-registrar';

export default dependencies => {
    console.log('Hello World', dependencies.get('styles'));
    import('scroll-text').then(ScrollText => {
        console.log(ScrollText);
        ScrollText = ScrollText.default;
        Array.from(document.querySelectorAll('[data-scroll-text]')).map(
            el => new ScrollText(el)
        );
    });

    ServiceWorkerRegistrar.onUpdateAvailable(() => {
        console.log('Update Available');
        document.querySelector('h1').addEventListener('click', function() {
            ServiceWorkerRegistrar.applyUpdates();
        });
    });
};
