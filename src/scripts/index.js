const requiredDependencies = [ // Required Dependencies

]
const optionalDependencies = [ // Dependencies which can be loaded async

];

const _dependencies = [
    import('./app'),
    import('../styles/app.scss'),
    ...requiredDependencies,
]
Promise.all(_dependencies)
    .then(([App, , ...dependencies]) => {
        new App(dependencies);
        document.body.classList.add('loaded')
    })
    .catch((err) => console.error("Failed to load dependencies.", err))

Promise.all(optionalDependencies)
    .catch((err) => console.error("Failed to load dependencies.", err));