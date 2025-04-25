export function Education() {
	return (
		<div className="education">
			<h2>Educational Experience</h2>
			<form>
				<div>
					<label htmlFor="schoolName">School Name</label>
					<input type="text" id="schoolName" />
				</div>
				<div>
					<label htmlFor="TitleOfStudy">Title Of Study </label>
					<input type="text" id="TitleOfStudy" />
				</div>
				<div>
					<label htmlFor="dateOfStudy">Date Range</label>
					<input type="text" id="dateOfStudy" placeholder="September 2023 - Present" />
				</div>
				<div>
					<button>Edit</button>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
}
