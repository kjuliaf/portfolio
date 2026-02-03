import MediaLink from "../components/UI/MediaLink"

function Footer() {
	function getYear() {
		return new Date().getFullYear()
	}

	return (
		<footer className="bg-neutral-900">
			<div className="section-margin-x">
				<div className="flex flex-col gap-4 pt-30 pb-20 md:flex-row md:gap-6">
					<MediaLink
						text="kjuliaforsberg@gmail.com"
						link="mailto:kjuliaforsberg@gmail.com"
					/>

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
			<div className="section-margin-x pb-10">
				<hr className="text-neutral-600" />
				<p className="mt-3 text-sm text-neutral-600">
					Copyright © {getYear()} Julia
				</p>
			</div>
		</footer>
	)
}

export default Footer
