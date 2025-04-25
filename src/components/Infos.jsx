import { General } from "./General";
import { Experience } from "./Experience";
import { Education } from "./Education";
export function Infos() {
	return (
		<div className="infos">
			<General />
			<Education />
			<Experience />
		</div>
	);
}
