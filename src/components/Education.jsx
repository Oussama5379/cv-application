export function Education({ schoolName, titleOfStudy, dateOfStudy, handleChange }) {
	const tempInfo = {
		schoolName,
		titleOfStudy,
		dateOfStudy,
	};
	return (
		<div className="education">
			<h2>Educational Experience</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleChange({
						schoolName: tempInfo.schoolName,
						titleOfStudy: tempInfo.titleOfStudy,
						dateOfStudy: tempInfo.dateOfStudy,
					});
				}}
			>
				<div>
					<label htmlFor="schoolName">School Name</label>
					<br />
					<input
						type="text"
						id="schoolName"
						defaultValue={schoolName}
						onChange={(e) => {
							tempInfo.schoolName = e.target.value;
						}}
					/>
				</div>
				<div>
					<label htmlFor="titleOfStudy">Title Of Study </label>
					<br />
					<input
						type="text"
						id="titleOfStudy"
						defaultValue={titleOfStudy}
						onChange={(e) => {
							tempInfo.titleOfStudy = e.target.value;
						}}
					/>
				</div>
				<div>
					<label htmlFor="dateOfStudy">Date Range</label>
					<br />
					<input
						type="text"
						id="dateOfStudy"
						defaultValue={dateOfStudy}
						onChange={(e) => {
							tempInfo.dateOfStudy = e.target.value;
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
