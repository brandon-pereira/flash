const anime = require('animejs');

export default () => {

	var path = anime.path('.svg-icon');

	anime({
		targets: '.svg-icon path',
		strokeDashoffset: [anime.setDashoffset, 1],
		easing: 'linear',
		duration: 2000,
	});
	
	anime({
		targets: '.svg-icon #right',
		translateX: [50, 0],
		opacity: [0, 1],
		easing: 'easeInOutQuart',
		delay: 600,
	})
	
	anime({
		targets: '.svg-icon #front-and-top',
		translateX: [-50, 0],
		translateY: [-50, 0],
		opacity: [0, 1],
		delay: 400,
		easing: 'easeInOutQuart',
	})
	
	anime({
		targets: 'h1',
		translateY: [100, 0],
		scale: [0, 1],
		opacity: [0, 1],
		delay: 800,
		easing: 'easeInOutQuart',
	})

	
};