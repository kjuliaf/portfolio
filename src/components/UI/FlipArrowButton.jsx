import Arrow from "../../assets/icons/arrow.svg"
import Button from "./Button"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function FlipArrowButton({ text, outlined, href, className }) {
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
		<motion.div whileHover="hovered" initial="initial">
			<Button
				type="button"
				onClick={handleClick}
				outlined={outlined}
				className={`inline-flex items-center justify-center gap-2 ${className}`}
			>
				{text}
				<motion.div className="relative w-4 overflow-hidden">
					<motion.div
						variants={{
							hovered: { y: "-100%" },
							initial: { y: 0 },
						}}
						transition={{ duration: 0.15 }}
					>
						<motion.img src={Arrow} alt="Arrow" />
					</motion.div>
					<motion.div
						className="absolute"
						variants={{
							hovered: { y: "-100%" },
							initial: { y: 0 },
						}}
						transition={{ duration: 0.15 }}
					>
						<motion.img src={Arrow} alt="Arrow" />
					</motion.div>
				</motion.div>
			</Button>
		</motion.div>
	)
}

export default FlipArrowButton
