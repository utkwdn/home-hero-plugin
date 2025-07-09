import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );

let mm = gsap.matchMedia();

mm.add( '(min-width: 768px)', () => {
	gsap.to( '.fade-in', {
		opacity: 1,
		y: 0,
		duration: 1,
		stagger: 0.5,
		scrollTrigger: {
			trigger: '.fade-in',
			start: 'top 90%',
			toggleActions: 'play none none none',
		},
	} );

	gsap.to( '.fade-up', {
		opacity: 1,
		y: 0,
		duration: 0.4,
		stagger: 0.2,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: '.fade-up',
			start: 'top 90%',
			toggleActions: 'play none none none',
		},
	} );

	gsap.to( '.fade-left, .fade-left-after', {
		opacity: 1,
		x: 0,
		duration: 0.8,
		stagger: 0.6,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: '.fade-left',
			start: 'top 90%',
			toggleActions: 'play none none none',
		},
	} );
} );

gsap.to( '.fade-right', {
	opacity: 1,
	x: 0,
	duration: 1,
	ease: 'power3.out',
	scrollTrigger: {
		trigger: '.fade-right',
		start: 'top 90%',
		toggleActions: 'play none none none',
	},
} );
