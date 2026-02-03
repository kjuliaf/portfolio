import Project from "../components/UI/Project"
import HabitTrackerImg from "../assets/images/projects/habit-tracker/app.png"
import GlimtinImg from "../assets/images/projects/glimtin/front-page.jpeg"
import PhotoGalleryImg from "../assets/images/projects/photo-gallery/front-page.png"

function Portfolio() {
	return (
		<section
			id="portfolio"
			className="rounded-t-2xl bg-neutral-900 text-neutral-100 sm:rounded-t-3xl lg:rounded-t-4xl"
		>
			<div className="section-margin-x section-padding-y">
				<h2 className="lg-title">Portfolio</h2>
				<hr className="mt-2 text-neutral-600 md:mt-4" />

				<div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-0">
					<Project
						title="Habit tracker"
						description="Fullstack habit tracker with login functionality, statistical overview and focus timer. Helps you balance everyday life by navigating your priorities and mind."
						imageSrc={HabitTrackerImg}
						altText="Screenshot of habit tracker"
						badges={["Fullstack", "Web"]}
						index="1"
						link="project/habit-tracker"
					/>
					<Project
						title="Glimtin's website"
						description="Glimtin informs and inspires young women about opportunities in engineering. The website provides information to young women, companies and policymakers."
						imageSrc={GlimtinImg}
						altText="Screenshot of Glimtin's website"
						badges={["Frontend", "Web"]}
						index="2"
						link="/project/glimtin"
					/>
					<Project
						title="Photo gallery"
						description="Photo gallery with headless CMS integration for seamlessly handling image uploads, locations and categories."
						imageSrc={PhotoGalleryImg}
						altText="Screenshot of photo gallery"
						badges={["Frontend", "Web"]}
						index="3"
						link="/project/photo-gallery"
					/>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
