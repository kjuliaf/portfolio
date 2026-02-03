import Logo from "../assets/images/logo.svg"
import FlipLink from "./UI/FlipLink.jsx"

function Header({ menu = true }) {
	return (
		<header className="section-margin-x my-4 flex items-center justify-between">
			<a href="/">
				<img
					className="w-45 grayscale transition duration-300 hover:grayscale-0 md:w-55"
					src={Logo}
					alt="Julia Forsberg logo"
				/>
				<span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></span>
			</a>
			{menu && (
				<nav>
					<ul className="hidden gap-4 sm:flex">
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
			)}
		</header>
	)
}

export default Header
