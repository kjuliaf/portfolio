import MediaLink from "../components/UI/MediaLink"

function Contact() {
	function getYear() {
		return new Date().getFullYear()
	}

	return (
		<footer id="contact" className="bg-neutral-900">
			<div className="section-margin-x section-padding-y">
				<div className="mb-2 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
					<h2 className="xl-title leading-snug text-neutral-100 sm:text-nowrap">
						<span className="relative inline-block">
							<span
								aria-hidden
								className="border-primary-light absolute inset-[-0.04em] rotate-200 rounded-[100%_60%] border"
							/>
							Let's
						</span>{" "}
						get <br className="hidden sm:block" />
						<span className="sm:ml-22 md:ml-26 lg:ml-34">
							in touch
						</span>
					</h2>
					<div className="mt-4 flex flex-col sm:-mt-2 sm:items-end sm:text-right md:mt-6">
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
					Copyright © {getYear()} Julia
				</p>
			</div>
		</footer>
	)
}

export default Contact
