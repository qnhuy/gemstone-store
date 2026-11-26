'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AnimationPage({}: PageProps<'/animation'>) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to('.box1', {
			scrollTrigger: {
				trigger: '.box1',
				markers: true,
				scrub: 0.5,
				start: 'top 80%',
				end: 'top 20%',
			},
			x: 500,
			rotate: 360,
		})
	}, [])

	return (
		<main>
			<div className='h-1000 w-full'>
				<div className='box1 mt-300 w-40 h-40 border-2 border-foreground' />
				{/* <div className="box2 w-40 h-40 border-2 border-foreground" /> */}
			</div>
		</main>
	)
}
