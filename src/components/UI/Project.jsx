import Badge from "./Badge"
import FlipArrowButton from "./FlipArrowButton"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function Project({ title, description, imageSrc, altText, badges, index = 1 }) {
	return (
		<motion.div
			className="flex flex-col-reverse gap-6 md:flex-row md:items-stretch md:justify-between lg:gap-12"
			initial={{ opacity: 0.2, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.1 }}
		>
			<div className="hidden self-stretch md:block">
				<div className="relative h-full">
					<div className="relative h-full">
						<div className="absolute top-0 bottom-0 left-1/2 -mt-16 -translate-x-1/2">
							<div className="flex h-full flex-col items-center justify-between py-2">
								{Array.from({ length: 60 }).map((_, i) => (
									<div
										key={i}
										className="h-0.5 w-0.5 rounded-full bg-neutral-700"
									/>
								))}
							</div>
						</div>

						<div
							className={`sticky top-8 mt-8 bg-neutral-900 md:w-22 lg:w-28 ${index != 3 ? "md:mb-30" : "md:mb-16"}`}
						>
							<p className="md:text-7xl lg:text-8xl">0{index}</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`w-full min-w-80 md:mt-8 ${index != 3 ? "md:mb-24" : "md:mb-8"}`}
			>
				<div className="mb-2 flex gap-1 md:mb-4">
					{badges &&
						badges.map((badgeText, index) => (
							<Badge key={index} text={badgeText} />
						))}
				</div>{" "}
				<h3 className="md-title">{title}</h3>
				<p className="mt-2 max-w-160 text-lg text-neutral-200 sm:mt-3 md:mt-5 md:text-xl">
					{description}
				</p>
				<div className="mt-8 md:mt-12">
					<FlipArrowButton
						text="Learn more"
						outlined={true}
						className="w-full border-neutral-200 md:w-fit"
					/>
				</div>
			</div>
			<img
				className={`aspect-3/2 w-full min-w-0 rounded-xl object-cover object-top ${index != 3 ? "md:mb-24" : "md:mb-8"} md:aspect-5/4 md:max-w-140`}
				src={imageSrc}
				alt={altText}
			/>{" "}
		</motion.div>
	)
}

export default Project
