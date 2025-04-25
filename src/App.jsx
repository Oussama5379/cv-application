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
		dateOfWork: "September 2024 - Present",
	});
	const [educationInfos, setEducationInfos] = useState({
		schoolName: "INSAT",
		titleOfStudy: "Software Engineering",
		dateOfStudy: "September 2023 - Present",
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
				<Education
					schoolName={educationInfos.schoolName}
					titleOfStudy={educationInfos.titleOfStudy}
					dateOfStudy={educationInfos.dateOfStudy}
					handleChange={setEducationInfos}
				/>
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
					<h1>Educational Experience</h1>
					<p>
						<span style={{ fontWeight: "600", fontSize: "26px " }}>
							{educationInfos.schoolName}
						</span>
					</p>
					<div style={{ display: "flex", justifyContent: "space-between", fontSize: "22px" }}>
						<span>{educationInfos.titleOfStudy + " "}</span>
						<span>{educationInfos.dateOfStudy}</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
