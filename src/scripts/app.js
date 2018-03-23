export default (dependencies) => {
	console.log("Hello World", dependencies.get('styles'));
	import('scroll-text')
		.then(ScrollText => {
			Array.from(document.querySelectorAll('[data-scroll-text]'))
				.map(el => new ScrollText(el));
		})
	import('animejs')
		.then(anime => {
			anime({
				targets: '#loader g#anchor',
				translateX: -50,
				translateY: 5,
				rotate: 3,
				loop: true,
				duration: 1000,
				delay: 2000,
				direction: 'alternate',
				easing: 'linear'
			});
			anime({
				targets: '#coder g#arm',
				translateX: -20,
				translateY: [-5, 0],
				loop: true,
				duration: 1000,
				delay: 2000,
				direction: 'alternate',
				easing: 'linear'
			});
			anime({
				targets: '#coder g#monitor-one-code *',
				translateY: [-10, 0],
				opacity: [0, 1],
				loop: true,
				duration: 10,
				delay: (el, i) => i * 100,
				easing: 'linear'
			});
			anime({
				targets: '#coder g#monitor-two-code *',
				translateY: [-10, 0],
				opacity: [0, 1],
				loop: true,
				duration: 100,
				delay: (el, i) => i * 100,
				easing: 'linear'
			});
		})
}