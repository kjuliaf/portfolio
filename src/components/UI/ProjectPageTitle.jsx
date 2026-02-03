import Badge from "./Badge"
import MediaLink from "./MediaLink"

function ProjectPageTitle({
	title,
	badges,
	description,
	techStack,
	img,
	alt,
	githubLink,
	liveLink,
}) {
	return (
		<div className="my-12 grid items-center gap-12 md:grid-cols-2">
			<div>
				<div className="mb-2 flex gap-1 md:mb-4">
					{badges &&
						badges.map((badgeText, index) => (
							<Badge
								key={index}
								text={badgeText}
								color={"dark"}
							/>
						))}
				</div>
				<h1 className="lg-title">{title}</h1>
				<p className="mt-4 md:mt-6 lg:mt-8 lg:text-lg">{description}</p>
				<p className="mt-6 md:mt-8 lg:mt-10 lg:text-lg">
					<span className="mr-2 w-26 min-w-26 text-lg font-medium lg:mr-4 lg:w-30 lg:min-w-30 lg:text-xl">
						Tech stack
					</span>
					<span className="text-neutral-600">{techStack}</span>
				</p>
				{(githubLink || liveLink) && (
					<div className="mt-4 flex gap-3 md:mt-6 md:gap-4 lg:mt-8 lg:gap-5">
						{githubLink && (
							<MediaLink
								text="GitHub"
								link={githubLink}
								color="primary"
								xl={false}
							/>
						)}
						{liveLink && (
							<MediaLink
								text="Live preview"
								link={liveLink}
								color="primary"
								xl={false}
							/>
						)}
					</div>
				)}
			</div>
			<div className="w-full md:justify-self-end lg:max-w-140">
				<img
					src={img}
					alt={alt}
					className="aspect-square w-full rounded-sm border border-neutral-300 object-cover object-top"
				/>
			</div>
		</div>
	)
}

export default ProjectPageTitle
