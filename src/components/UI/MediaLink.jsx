import Arrow from "../../assets/icons/arrow.svg"
import ArrowPrimary from "../../assets/icons/arrowprimary.svg"

function MediaLink({ text, link, color = "white", xl = true }) {
	function getColorStyles(color) {
		if (color === "white") {
			return "hover:text-primary-light text-neutral-100"
		}
		if (color === "primary") {
			return "text-primary"
		}
	}
	return (
		<a
			href={link}
			className={`flex cursor-pointer gap-1 underline transition duration-200 ease-in-out ${getColorStyles(color)} ${xl ? "text-xl md:text-2xl lg:gap-2 lg:text-4xl" : "text-lg md:text-xl lg:text-2xl"}`}
			target="__blank"
		>
			<img
				src={color === "primary" ? ArrowPrimary : Arrow}
				alt="Arrow"
				className={`w-5 min-w-5 ${xl ? "md:min-w-6 lg:w-9 lg:min-w-9" : "lg:w-6 lg:min-w-6"} -rotate-90 md:w-6`}
			/>
			{text}
		</a>
	)
}

export default MediaLink
