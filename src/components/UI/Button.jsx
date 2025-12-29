function Button({ children, onClick, className }) {
	return (
		<button
			className={`cursor-pointer bg-neutral-800 px-6 py-3 text-lg text-neutral-100 transition hover:bg-blue-700 ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
