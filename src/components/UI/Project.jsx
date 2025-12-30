import Badge from "./Badge"
import FlipArrowButton from "./FlipArrowButton"

function Project({ title, description, imageSrc, altText, badges }) {
	return (
		<div className="flex flex-col justify-between gap-6 md:flex-row md:items-center lg:gap-24 lg:px-6">
			<div className="min-w-80">
				<h3 className="md-title text-neutral-200">{title}</h3>
				<p className="mt-2 max-w-160 sm:mt-3 md:mt-5">{description}</p>
				<div className="mt-5 flex gap-1 md:mt-7">
					{badges &&
						badges.map((badgeText, index) => (
							<Badge key={index} text={badgeText} />
						))}
				</div>
				<div className="mt-8 hidden md:mt-12 md:block">
					<FlipArrowButton
						text="View case"
						outlined={true}
						className="border-neutral-200"
					/>
				</div>
			</div>
			<img
				className="aspect-3/2 min-w-0 rounded-2xl object-cover object-top md:aspect-4/3 md:max-w-140"
				src={imageSrc}
				alt={altText}
			/>
			<div className="md:hidden">
				<FlipArrowButton
					className="w-full border-neutral-200"
					text="View case"
					outlined={true}
				/>
			</div>
		</div>
	)
}

export default Project
