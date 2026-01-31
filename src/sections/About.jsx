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
			<ul className="ml-5 list-disc">
				<li className="mt-6 lg:mt-8 lg:text-lg">
					<span className="font-medium">
						MSE Interaction Technology and Design
					</span>{" "}
					(2022-2027)
				</li>
				<li className="mt-2 lg:text-lg">
					<span className="font-medium">B.Sc Computer Science</span>{" "}
					(2022-2027)
				</li>
			</ul>

			<h3 className="md-title mt-16">Technical skills</h3>
			<div className="mt-6 ml-1 flex lg:mt-8 lg:text-lg">
				<p className="w-22 min-w-22 font-medium lg:w-27 lg:min-w-27">
					Frontend
				</p>
				<p>
					JavaScript • TypeScript • React • TailwindCSS • SvelteKit •
					Next.js • HTML • CSS
				</p>
			</div>

			<div className="mt-4 ml-1 flex lg:text-lg">
				<p className="w-22 min-w-22 font-medium lg:w-27 lg:min-w-27">
					Backend
				</p>
				<p>Java • Python</p>
			</div>

			<div className="mt-4 ml-1 flex lg:text-lg">
				<p className="w-22 min-w-22 font-medium lg:w-27 lg:min-w-27">
					Tools
				</p>
				<p>Git • GitHub • GitLab • Docker</p>
			</div>
		</section>
	)
}

export default About
