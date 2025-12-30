// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function FlipLink({ children, href }) {
	return (
		<a href={href}>
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
