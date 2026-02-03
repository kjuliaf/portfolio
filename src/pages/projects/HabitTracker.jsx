import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FrontPageImg from "../../assets/images/projects/habit-tracker/landing-page.png"
import AppImg from "../../assets/images/projects/habit-tracker/app.png"
import FocusTimerImg from "../../assets/images/projects/habit-tracker/focus-timer.png"
import OverviewImg from "../../assets/images/projects/habit-tracker/overview.png"
import ProjectPageTitle from "../../components/UI/ProjectPageTitle"
import ProjectPageContent from "../../components/UI/ProjectPageContent"
import BackLink from "../../components/UI/BackLink"

function HabitTracker() {
	return (
		<>
			<Header menu={false} />
			<div className="section-margin-x mx-4 md:mx-6 lg:mx-10">
				<ProjectPageTitle
					title="Habit tracker"
					badges={["Fullstack", "Web"]}
					description="Fullstack habit tracker with login functionality,
							statistical overview and focus timer. Helps you
							balance everyday life by navigating your priorities
							and mind."
					techStack="TypeScript • SvelteKit • Tailwind CSS • DaisyUI
								• Supabase • PostgreSQL • Drizzle"
					img={FrontPageImg}
					alt="Landing page of habit tracker application"
				/>

				<ProjectPageContent
					title="Problem description"
					text="The project started as a practice project to learn authentication and data visualization, and grew to a larger-scale fully-integrated habit tracker with many useful features. The goal became to create a visually appealing and user-friendly application while remaining minimalistic."
					img={AppImg}
					alt="Habit tracker app when logged in"
					reverse
				/>

				<ProjectPageContent
					title="Work process"
					text="A prototype was designed in Figma. When starting the implementation process, the main focus was to implement registration and login logic. Habit tracking, overview and focus timer features were added, and the application is currently continuously maintained and improved."
					img={OverviewImg}
					alt="Statistical overview of habits tracked"
				/>

				<ProjectPageContent
					title="Result"
					text="The habit tracker is flexible and personalized where you can choose different frequencies, units and icons for your habits. While the main purpose of the application is to manage and track habits, the application also aims at being intuitive and an ease of mind to use."
					img={FocusTimerImg}
					alt="Focus timer"
					reverse
				/>

				<BackLink href="/" />
			</div>

			<Footer />
		</>
	)
}

export default HabitTracker
