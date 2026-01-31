import Project from "../components/UI/Project"
import Project1 from "../assets/images/project1.jpeg"
import Project2 from "../assets/images/project2.jpg"
import Project3 from "../assets/images/project3.jpeg"

function Portfolio() {
	return (
		<section
			id="portfolio"
			className="rounded-t-2xl bg-neutral-900 text-neutral-100 sm:rounded-t-3xl lg:rounded-t-4xl"
		>
			<div className="section-margin-x section-padding-y">
				<h2 className="lg-title">Portfolio</h2>
				<hr className="mt-2 text-neutral-600 md:mt-4" />

				<div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-0">
					<Project
						title="Glimtin's website"
						description="Glimtin informs and inspires young women about opportunities in engineering and the technology field."
						imageSrc={Project1}
						altText="Screenshot of Glimtin's website"
						badges={["Frontend", "Web"]}
						index="1"
					/>
					<Project
						title="Habit tracker"
						description="Fullstack habit tracker with login functionality."
						imageSrc={Project2}
						altText="Screenshot of habit tracker"
						badges={["Fullstack", "Web"]}
						index="2"
					/>
					<Project
						title="Photo gallery"
						description="Photo gallery with CMS integration."
						imageSrc={Project3}
						altText="Screenshot of photo gallery"
						badges={["Frontend", "Web"]}
						index="3"
					/>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
