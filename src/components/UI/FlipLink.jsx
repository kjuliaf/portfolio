// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function FlipLink({ children, href }) {
	const handleClick = (e) => {
		if (!href?.startsWith("#")) return

		e.preventDefault()

		const id = href.slice(1)
		const el = document.getElementById(id)
		if (!el) return

		history.pushState(null, "", href)

		el.scrollIntoView({ behavior: "smooth", block: "start" })
	}

	return (
		<a href={href} onClick={handleClick}>
			<motion.div
				className="relative overflow-hidden"
				whileHover="hovered"
				initial="initial"
			>
				<motion.div
					variants={{
						hovered: { y: "-100%" },
						initial: { y: 0 },
					}}
					transition={{ duration: 0.15 }}
				>
					<motion.div>{children}</motion.div>
				</motion.div>
				<motion.div
					className="absolute"
					variants={{
						hovered: { y: "-100%" },
						initial: { y: 0 },
					}}
					transition={{ duration: 0.15 }}
				>
					<motion.div>{children}</motion.div>
				</motion.div>
			</motion.div>
		</a>
	)
}

export default FlipLink
