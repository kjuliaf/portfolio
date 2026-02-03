import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const scrollPositions = {}

export default function ScrollRestoration() {
	const location = useLocation()

	useEffect(() => {
		const key = location.key

		// Restore scroll when navigating back
		if (scrollPositions[key] !== undefined) {
			window.scrollTo(0, scrollPositions[key])
		}

		const handleScroll = () => {
			scrollPositions[key] = window.scrollY
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
			scrollPositions[key] = window.scrollY
		}
	}, [location])

	return null
}
