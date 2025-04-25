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
	const [experienceInfos, setExperienceInfos] = useState({
		companyName: "Google",
		positionTitle: "Software Engineer",
		dateOfWork: "September 2023 - Present",
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
				<Experience
					companyName={experienceInfos.companyName}
					positionTitle={experienceInfos.positionTitle}
					dateOfWork={experienceInfos.dateOfWork}
					handleChange={setExperienceInfos}
				/>
				<Education />
			</div>

			<div className="resume">
				<div className="general">
					<h1>{generalInfos.name}</h1>
					<div style={{ display: "flex", justifyContent: "space-around", fontSize: "26px" }}>
						<span>{generalInfos.phone}</span> <span>{generalInfos.email}</span>
					</div>
				</div>
				<div className="experience">
					<h1>Practice Experience</h1>
					<h3></h3>
					<h4></h4>
					<p>
						<span style={{ fontWeight: "600", fontSize: "26px " }}>
							{experienceInfos.companyName}
						</span>
					</p>
					<div style={{ display: "flex", justifyContent: "space-between", fontSize: "22px" }}>
						<span>{experienceInfos.positionTitle + " "}</span>
						<span>{experienceInfos.dateOfWork}</span>
					</div>
				</div>
				<div className="education">
					<h2>Educational Experience</h2>
				</div>
			</div>
		</>
	);
}

export default App;
