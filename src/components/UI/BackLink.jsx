import BackArrow from "../../assets/icons/backarrow.svg"

function BackLink({ href }) {
	return (
		<div className="mb-30 md:mt-6 lg:mt-10">
			<a
				className="flex items-center text-lg text-neutral-500 underline md:text-xl lg:text-2xl"
				href={href}
			>
				<img
					className="w-8 md:w-9 lg:w-10"
					src={BackArrow}
					alt="Back arrow"
				/>
				Back
			</a>
		</div>
	)
}

export default BackLink
