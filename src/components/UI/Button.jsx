function Button({ children, onClick, className, outlined }) {
	return (
		<button
			className={`hover:bg-primary cursor-pointer bg-neutral-800 px-6 py-3 text-lg text-neutral-100 transition ${className} ${outlined ? "hover:border-primary border border-neutral-100 bg-transparent" : ""}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
