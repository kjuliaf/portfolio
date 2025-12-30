import Arrow from "../../assets/icons/arrow.svg"
import Button from "./Button"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function FlipArrowButton({ text, outlined, href, className }) {
	return (
		<motion.a whileHover="hovered" initial="initial" href={href}>
			<Button
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
						transition={{ duration: 0.2 }}
					>
						<motion.img src={Arrow} alt="Arrow" />
					</motion.div>
					<motion.div
						className="absolute"
						variants={{
							hovered: { y: "-100%" },
							initial: { y: 0 },
						}}
						transition={{ duration: 0.2 }}
					>
						<motion.img src={Arrow} alt="Arrow" />
					</motion.div>
				</motion.div>
			</Button>
		</motion.a>
	)
}

export default FlipArrowButton
