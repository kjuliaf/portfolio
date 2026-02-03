import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FrontPageImg from "../../assets/images/projects/glimtin/front-page.jpeg"
import ProjectPageTitle from "../../components/UI/ProjectPageTitle"
import ProjectPageContent from "../../components/UI/ProjectPageContent"
import BackLink from "../../components/UI/BackLink"

function Glimtin() {
	return (
		<>
			<Header menu={false} />
			<div className="section-margin-x mx-4 md:mx-6 lg:mx-10">
				<ProjectPageTitle
					title="Glimtin's website"
					badges={["Frontend", "Web"]}
					description="Glimtin informs and inspires young women about 	opportunities in engineering. The website provides information to young women, companies and policymakers."
					techStack="JavaScript • React • Tailwind CSS"
					img={FrontPageImg}
					alt="Front page of Glimtin"
					/* githubLink="https://github.com/kjuliaf/glimtin"
					liveLink="https://www.glimtin.se/" */
				/>

				{/* <ProjectPageContent
					title="Problem description"
					text="Glimtin informs and inspires young women about 	opportunities in engineering. The website provides information to young women, companies and policymakers."
					img={FrontPageImg}
					alt="Front page of Glimtin"
					reverse
				/> */}

				<BackLink href="/" />
			</div>

			<Footer />
		</>
	)
}

export default Glimtin
