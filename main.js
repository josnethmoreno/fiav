import './style.css'
import './reset.css'
import './fonts.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import SplitType from 'split-type'

const lenis = new Lenis()
gsap.registerPlugin(ScrollTrigger)

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
	lenis.raf(time * 600)
})

document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    const id = el.getAttribute('href')?.slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

gsap.ticker.lagSmoothing(0)

let tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 2 } })

tl.to('header', {
	opacity: 1,
	duration: 1.2,
	delay: 0.6,
})
tl.to(
	'h2',
	{
		'clip-path': 'inset(0% 0% 0% 0%)',
		y: 0,
		opacity: 1,
		duration: 0.8,
	},
	'-=.4'
)
tl.to('.hero-center p', {
	'clip-path': 'inset(0% 0% 0% 0%)',
	y: 0,
	opacity: 1,
	duration: 0.8,
})
tl.to('.hero .button-secondary', {
	opacity: 1,
	duration: 0.8,
})
tl.to(
	'.hero .whatsapp',
	{
		opacity: 1,
		duration: 0.8,
	},
	'-=.4'
)

gsap.to('.data-ul', {
	scrollTrigger: {
		trigger: '.data-ul',
		start: 'top 70%',
		scrub: false,
		markers: false,
	},
	opacity: 1,
	clipPath: 'inset(0% 0% 0% 0%)',
	stagger: 0.4,
	ease: 'power2.out',
	duration: 1,
})

const form = document.getElementById('mc-embedded-subscribe-form')

form.addEventListener('submit', (e) => {
	setTimeout(() => {
		e.target.reset()
	}, 1000)
})
