const requiredDependencies = [ // Dependencies which are required before app ready
	import('./lib/animate'),
	import('./flash') // remove this when you fork
];
const optionalDependencies = [ // Dependencies which can be loaded async
	import('../styles/app.scss')
];

Promise.all(requiredDependencies)
	.then(([animate, flash]) => {
		flash(animate);
	})
	.catch((err) => console.error("Failed to load dependencies.", err))
	
Promise.all(optionalDependencies)
	.catch((err) => console.error("Failed to load dependencies.", err));