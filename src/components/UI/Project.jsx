import Button from "./Button"

function Project({ title, description, imageSrc, altText }) {
	return (
		<div className="flex flex-col justify-between gap-6 md:flex-row md:items-center lg:gap-24">
			<div>
				<h3 className="md-title">{title}</h3>
				<p className="mt-4 max-w-140 md:mt-6">{description}</p>
				<Button className="mt-8 hidden border bg-transparent hover:bg-transparent md:mt-12 md:block">
					View case -{">"}
				</Button>
			</div>
			<img
				className="aspect-3/2 w-full object-cover object-top md:aspect-square md:max-w-110"
				src={imageSrc}
				alt={altText}
			/>
			<Button className="border bg-transparent hover:bg-transparent md:hidden">
				View case -{">"}
			</Button>
		</div>
	)
}

export default Project
