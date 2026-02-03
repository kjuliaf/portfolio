import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FrontPageImg from "../../assets/images/projects/photo-gallery/front-page.png"
import ProjectPageTitle from "../../components/UI/ProjectPageTitle"
import ProjectPageContent from "../../components/UI/ProjectPageContent"
import BackLink from "../../components/UI/BackLink"

function PhotoGallery() {
	return (
		<>
			<Header menu={false} />
			<div className="section-margin-x mx-4 md:mx-6 lg:mx-10">
				<ProjectPageTitle
					title="Photo gallery"
					badges={["Frontend", "Web"]}
					description="Photo gallery with headless CMS integration for seamlessly handling image uploads, locations and categories."
					techStack="TypeScript • Next.js • Tailwind CSS • Prismic API"
					img={FrontPageImg}
					alt="Front page of photo gallery"
					/* githubLink="https://github.com/kjuliaf/julias-gallery"
					liveLink="https://www.juliasgallery.com/" */
				/>

				{/* <ProjectPageContent
					title="Problem description"
					text="Photo gallery with headless CMS integration for seamlessly handling image uploads, locations and categories."
					img={FrontPageImg}
					alt="Front page of photo gallery"
					reverse
				/> */}

				<BackLink href="/" />
			</div>

			<Footer />
		</>
	)
}

export default PhotoGallery
