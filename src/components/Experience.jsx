export function Experience() {
	return (
		<div className="experience">
			<h2>Practice Experience</h2>
			<form>
				<div>
					<label htmlFor="companyName">Company Name</label>
					<br />
					<input type="text" id="companyName" />
				</div>
				<div>
					<label htmlFor="positionTitle">Position Title </label>
					<br />
					<input type="text" id="positionTitle" />
				</div>
				<div>
					<label htmlFor="dateOfWork">Date Range</label>
					<br />
					<input type="text" id="dateOfWork" placeholder="September 2023 - Present" />
				</div>
				<div>
					<button>Edit</button>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
}
