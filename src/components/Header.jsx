import Logo from "../assets/images/logo.svg"
import ColorLogo from "../assets/images/color-logo.svg"
import FlipLink from "./UI/FlipLink.jsx"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function Header() {
	return (
		<header className="section-margin-x my-4 flex items-center justify-between">
			<a href="/">
				<motion.div
					className="relative inline-block w-45 md:w-55"
					whileHover="hover"
					initial="initial"
				>
					<img
						className="w-full"
						src={Logo}
						alt="Julia Forsberg logo"
					/>
					<motion.img
						className="absolute top-0 left-0 w-full"
						src={ColorLogo}
						alt="Julia Forsberg color logo"
						variants={{
							initial: {
								opacity: 0,
								transition: { duration: 0.3 },
							},
							hover: {
								opacity: 1,
								transition: { duration: 0.3 },
							},
						}}
					/>
				</motion.div>
			</a>
			<nav>
				<ul className="hidden gap-6 sm:flex">
					<li>
						<FlipLink href="#portfolio">Portfolio</FlipLink>
					</li>
					<li>
						<FlipLink href="#about">About</FlipLink>
					</li>
					<li>
						<FlipLink href="#contact">Contact</FlipLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
