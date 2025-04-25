import "./App.css";
import { General } from "./components/General";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { useState } from "react";

function App() {
	const [generalInfos, setGeneralInfos] = useState({
		name: "Oussama Lejmi",
		phone: "0021629147740",
		email: "oussama.lejmi@outlook.com",
	});
	return (
		<>
			<div className="infos">
				<General
					name={generalInfos.name}
					phone={generalInfos.phone}
					email={generalInfos.email}
					handleChange={setGeneralInfos}
				/>
				<Education />
				<Experience />
			</div>

			<div className="resume">
				<div className="general">
					<h1>{generalInfos.name}</h1>
					<div style={{ display: "flex", justifyContent: "space-around", fontSize: "26px" }}>
						<span>{generalInfos.phone}</span> <span>{generalInfos.email}</span>
					</div>
				</div>
				<div className="education">
					<h2>Educational Experience</h2>
				</div>
				<div className="experience">
					<h2>Practice Experience</h2>
				</div>
			</div>
		</>
	);
}

export default App;
