import logo from "../assets/logo.svg"

function Header() {
	return (
		<header className="section-margin-x my-4 flex items-center justify-between">
			<img className="w-60" src={logo} alt="Julia Forsberg logo" />
			<nav>
				<ul className="flex gap-8">
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
