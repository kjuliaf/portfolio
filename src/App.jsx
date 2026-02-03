import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ReactLenis } from "lenis/react"
import Home from "./pages/Home"
import HabitTracker from "./pages/projects/HabitTracker"
import Glimtin from "./pages/projects/Glimtin"
import PhotoGallery from "./pages/projects/PhotoGallery"
import ScrollRestoration from "./components/ScrollRestoration"

export default function App() {
	return (
		<BrowserRouter>
			<ScrollRestoration />
			<ReactLenis root />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/project/habit-tracker"
					element={<HabitTracker />}
				/>
				<Route path="/project/glimtin" element={<Glimtin />} />
				<Route
					path="/project/photo-gallery"
					element={<PhotoGallery />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
