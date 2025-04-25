export function General() {
	return (
		<div className="general">
			<h2>General Information</h2>
			<form>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
				</div>
				<div>
					<label htmlFor="phone">Phone</label>
					<input type="tel" id="phone" />
				</div>
				<div>
					<button>Edit</button>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
}
