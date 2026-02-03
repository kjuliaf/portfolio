import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function About() {
	const [active, setActive] = useState(false)

	return (
		<motion.section
			id="about"
			className="section-margin-x section-padding-y"
			onViewportEnter={() => setActive(true)}
			onViewportLeave={() => setActive(false)}
			viewport={{ amount: 0.6 }}
		>
			<div
				className={`pointer-events-none absolute inset-0 -z-10 transition-colors duration-2400 ease-[cubic-bezier(0.22,1,0.36,1)] ${active ? "bg-yellow-bg" : "bg-primary-bg"} `}
			/>
			<h2 className="lg-title">About</h2>
			<hr className="mt-2 text-neutral-400 md:mt-4" />
			<p className="mt-8 text-lg md:text-xl lg:mt-10">
				I'm a developer, passionately driven by bringing creative and
				impactful ideas into life. I enjoy working on challenging
				problems, designing and implementing user-centered solutions,
				and continuously learning new things.
			</p>

			<p className="mt-5 text-lg md:text-xl lg:mt-7">
				While currently in my fourth year of MSE in Interaction
				Technology and design, also pursuing a B.Sc in Computer Science,
				I'm focusing my elective courses on Artificial Intelligence,
				Machine Learning, and Deep Learning.
			</p>

			<h3 className="md-title mt-16">Technical skills</h3>
			<div className="mt-6 ml-1 flex items-baseline md:text-lg lg:mt-8">
				<p className="w-22 min-w-22 text-lg font-medium md:w-27 md:min-w-27 md:text-xl">
					Frontend
				</p>
				<p>
					JavaScript • TypeScript • React • TailwindCSS • SvelteKit •
					Next.js • HTML • CSS
				</p>
			</div>

			<div className="mt-4 ml-1 flex items-baseline md:text-lg">
				<p className="w-22 min-w-22 text-lg font-medium md:w-27 md:min-w-27 md:text-xl">
					Backend
				</p>
				<p>Java • Python</p>
			</div>

			<div className="mt-4 ml-1 flex items-baseline md:text-lg">
				<p className="w-22 min-w-22 text-lg font-medium md:w-27 md:min-w-27 md:text-xl">
					Tools
				</p>
				<p>Git • GitHub • GitLab • Docker</p>
			</div>
		</motion.section>
	)
}

export default About
