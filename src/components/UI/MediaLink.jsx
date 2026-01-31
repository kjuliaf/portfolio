import Arrow from "../../assets/icons/arrow.svg"

function MediaLink({ text, link }) {
	return (
		<a
			href={link}
			className="hover:text-primary-light flex cursor-pointer gap-1 text-xl text-neutral-100 underline transition duration-200 ease-in-out md:text-2xl lg:gap-2 lg:text-4xl"
			target="__blank"
		>
			<img
				src={Arrow}
				alt="Arrow"
				className="w-5 min-w-5 -rotate-90 md:w-6 md:min-w-6 lg:w-9 lg:min-w-9"
			/>
			{text}
		</a>
	)
}

export default MediaLink
