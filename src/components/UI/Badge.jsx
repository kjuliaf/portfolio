function Badge({ text, color }) {
	function getColorStyle(color) {
		if (color == "light") {
			return "text-primary-light border-primary-light"
		}
		if (color === "dark") {
			return "text-primary border-primary"
		}
	}

	return (
		<p
			className={`${getColorStyle(color)} w-fit rounded-xl border px-2 py-0.5 text-xs`}
		>
			{text}
		</p>
	)
}

export default Badge
