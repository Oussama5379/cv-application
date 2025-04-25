export function Experience({ companyName, positionTitle, dateOfWork, handleChange }) {
	const tempInfo = {
		companyName,
		positionTitle,
		dateOfWork,
	};
	return (
		<div className="experience">
			<h2>Practice Experience</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleChange({
						companyName: tempInfo.companyName,
						positionTitle: tempInfo.positionTitle,
						dateOfWork: tempInfo.dateOfWork,
					});
				}}
			>
				<div>
					<label htmlFor="companyName">Company Name</label>
					<br />
					<input
						type="text"
						defaultValue={companyName}
						id="companyName"
						onChange={(e) => {
							tempInfo.companyName = e.target.value;
						}}
					/>
				</div>
				<div>
					<label htmlFor="positionTitle">Position Title </label>
					<br />
					<input
						type="text"
						defaultValue={positionTitle}
						id="positionTitle"
						onChange={(e) => {
							tempInfo.positionTitle = e.target.value;
						}}
					/>
				</div>
				<div>
					<label htmlFor="dateOfWork">Date Range</label>
					<br />
					<input
						type="text"
						defaultValue={dateOfWork}
						id="dateOfWork"
						onChange={(e) => {
							tempInfo.dateOfWork = e.target.value;
						}}
					/>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
}
