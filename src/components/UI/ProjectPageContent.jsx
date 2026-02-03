function ProjectPageContent({ title, text, img, alt, reverse = false }) {
	return (
		<div className="my-16 grid items-center gap-10 md:grid-cols-2">
			<div className={`${reverse && "md:order-2"}`}>
				<h2 className="md-title">{title}</h2>
				<p className="mt-2 md:mt-4 lg:mt-6 lg:text-lg">{text}</p>
			</div>
			<div
				className={`w-full lg:max-w-140 ${reverse ? "md:order-1" : "justify-self-end"}`}
			>
				<img
					src={img}
					alt={alt}
					className="aspect-square w-full rounded-sm border border-neutral-300 object-cover object-top"
				/>
			</div>
		</div>
	)
}

export default ProjectPageContent
