export function General({ name, email, phone, handleChange }) {
	const tempInfo = {
		name,
		email,
		phone,
	};
	return (
		<div className="general">
			<h2>General Information</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleChange({
						name: tempInfo.name,
						phone: tempInfo.phone,
						email: tempInfo.email,
					});
				}}
			>
				<div>
					<label htmlFor="name">Name</label>
					<br />
					<input
						type="text"
						id="name"
						defaultValue={name}
						onChange={(e) => {
							tempInfo.name = e.target.value;
						}}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<br />
					<input
						type="email"
						defaultValue={email}
						id="email"
						onChange={(e) => {
							tempInfo.email = e.target.value;
						}}
					/>
				</div>
				<div>
					<label htmlFor="phone">Phone</label>
					<br />
					<input
						type="tel"
						defaultValue={phone}
						id="phone"
						onChange={(e) => {
							tempInfo.phone = e.target.value;
						}}
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
