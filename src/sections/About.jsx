function About() {
	return (
		<section id="about" className="section-margin-x section-padding-y">
			<h2 className="lg-title">About</h2>
			<hr className="mt-2 text-neutral-400 md:mt-4" />
			<p className="mt-8 lg:mt-10 lg:text-lg">
				I'm a developer, passionately driven by bringing creative and
				impactful ideas into life. I enjoy working on challenging
				problems, designing and implementing intuitive and user-friendly
				solutions, and continuously learning new skills and
				technologies.
			</p>

			<h3 className="md-title mt-16">Education</h3>
			<p className="mt-6 lg:mt-8 lg:text-lg">
				<span className="font-medium">
					MSE Interaction Technology and Design
				</span>{" "}
				(2022-2027)
			</p>
			<p className="mt-2 lg:text-lg">
				<span className="font-medium">B.Sc Computer Science</span>{" "}
				(2022-2027)
			</p>

			<h3 className="md-title mt-16">Technical skills</h3>
			<div className="mt-6 flex lg:mt-8 lg:text-lg">
				<p className="w-24 min-w-24 font-medium lg:w-28 lg:min-w-28">
					Frontend
				</p>
				<p>
					JavaScript • TypeScript • React • TailwindCSS • SvelteKit •
					Next.js • HTML • CSS
				</p>
			</div>

			<div className="mt-4 flex lg:text-lg">
				<p className="w-24 min-w-24 font-medium lg:w-28 lg:min-w-28">
					Backend
				</p>
				<p>Java • Python</p>
			</div>

			<div className="mt-4 flex lg:text-lg">
				<p className="w-24 min-w-24 font-medium lg:w-28 lg:min-w-28">
					Tools
				</p>
				<p>Git • GitHub • GitLab • Docker</p>
			</div>
		</section>
	)
}

export default About
