import { useNavigate } from "react-router-dom"
import BackArrow from "../../assets/icons/backarrow.svg"

function BackLink({ fallback = "/" }) {
	const navigate = useNavigate()

	return (
		<div className="mb-30 md:mt-6 lg:mt-10">
			<button
				type="button"
				onClick={() => {
					if (window.history.length > 1) {
						navigate(-1)
					} else {
						navigate(fallback, { replace: true })
					}
				}}
				className="flex cursor-pointer items-center text-lg text-neutral-500 underline md:text-xl lg:text-2xl"
			>
				<img
					className="w-8 md:w-9 lg:w-10"
					src={BackArrow}
					alt="Back arrow"
				/>
				Back
			</button>
		</div>
	)
}

export default BackLink
