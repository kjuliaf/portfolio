import MediaLink from "../components/UI/MediaLink"

function Contact() {
	function getYear() {
		return new Date().getFullYear()
	}

	return (
		<footer id="contact" className="bg-neutral-900">
			<div className="section-margin-x section-padding-y">
				<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
					<h2 className="xl-title leading-snug text-nowrap text-neutral-100">
						<span className="relative inline-block">
							<span
								aria-hidden
								className="absolute inset-[-0.04em] rotate-200 rounded-[100%_60%] border border-neutral-100"
							/>
							Let's
						</span>{" "}
						get <br />
						<span className="ml-18 sm:ml-22 md:ml-26 lg:ml-34">
							in touch
						</span>
					</h2>
					<div className="flex flex-col items-end text-right md:mt-6">
						<MediaLink
							text="kjuliaforsberg@gmail.com"
							link="mailto:kjuliaforsberg@gmail.com"
						/>

						<div className="mt-5 flex gap-3 md:mt-8 md:gap-4 lg:mt-10 lg:gap-6">
							<MediaLink
								text="LinkedIn"
								link="https://www.linkedin.com/in/julia-forsberg-31486b338/"
							/>
							<MediaLink
								text="GitHub"
								link="https://github.com/kjuliaf"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="section-margin-x pb-10">
				<hr className="text-neutral-600" />
				<p className="mt-3 text-sm text-neutral-600">
					Copyright © Julia ({getYear()})
				</p>
			</div>
		</footer>
	)
}

export default Contact
