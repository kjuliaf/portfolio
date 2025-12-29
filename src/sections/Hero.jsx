import Button from "../components/UI/Button"

function Hero() {
	return (
		<section className="hero section-margin-x flex min-h-[85dvh] items-center py-12">
			<div>
				<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
					Hi, I'm Julia. <br />A Software Engineer.
				</h1>
				<p className="mt-6 text-lg sm:text-xl lg:text-2xl">
					Focused on fullstack development while deepening AI & ML
					knowledge.
				</p>
				<Button className="mt-12">View work</Button>
			</div>
		</section>
	)
}

export default Hero
