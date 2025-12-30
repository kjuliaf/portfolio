import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./sections/Hero"
import Portfolio from "./sections/Portfolio"
import { Analytics } from "@vercel/analytics/react"

export default function App() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const fadeEnd = window.innerHeight * 0.8
	const opacity = Math.max(0, 1 - scrollY / fadeEnd)
	const scale = Math.max(0.95, 1 - (scrollY / fadeEnd) * 0.05)

	return (
		<>
			<div
				className="fixed inset-0 z-0"
				style={{
					opacity,
					scale,
				}}
			>
				<Header />
				<Hero />
			</div>

			<main className="relative z-10 mt-[95vh]">
				<Portfolio />
			</main>
			<Analytics />
		</>
	)
}
