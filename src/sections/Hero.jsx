import BgBlur from "../assets/images/bg-blur.png"
import HeroImg from "../assets/images/hero-img.jpg"
import FlipArrowButton from "../components/UI/FlipArrowButton"

function Hero() {
	return (
		<section className="hero section-margin-x flex min-h-[80vh] items-center py-12">
			<div className="relative">
				<h1 className="xl-title leading-tight">
					<span className="flex items-center gap-2 text-nowrap sm:gap-4 lg:gap-6">
						Hi, I'm Julia.
						<div className="relative inline-block">
							<div
								className="absolute inset-0 z-10 rounded-full border border-neutral-800"
								style={{ transform: "rotate(-8deg)" }}
							></div>

							<img
								className="relative aspect-3/2 h-14 rounded-full object-cover sm:h-16 md:h-18 lg:h-22"
								src={HeroImg}
								alt="Image of me"
							/>
						</div>
					</span>
					A Software Engineer.
				</h1>
				<p className="mt-6 text-lg sm:text-xl lg:text-2xl">
					Focused on fullstack development while deepening AI & ML
					knowledge.
				</p>

				<div className="mt-12 inline-block">
					<FlipArrowButton text="View work" href="#portfolio" />
				</div>

				<img
					className="absolute -top-20 -right-20 -z-1"
					src={BgBlur}
					alt="Background blur"
				/>
			</div>
		</section>
	)
}

export default Hero
