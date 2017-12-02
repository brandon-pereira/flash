const requiredDependencies = [
    import('./app'),
    import('../styles/app.scss')
]
const optionalDependencies = [ // Dependencies which can be loaded async
];

Promise.all(requiredDependencies)
    .then(([app]) => { // .then(([dep1, dep2]) =>
        app();
        document.body.classList.add('loaded')

    })
    .catch((err) => console.error("Failed to load dependencies.", err))

Promise.all(optionalDependencies)
    .catch((err) => console.error("Failed to load dependencies.", err));