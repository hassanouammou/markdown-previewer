/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

function Header({ onSwitchTabs }) {
	/* Settings tab open/close */
	const [settingsTabHidden, setSettingsTabHidden] = useState(true);
	function toggleSettingsTab() {
		setSettingsTabHidden((visibility) => !visibility);
	}
	return (
		<header>
			<a id="logo-title" href="">MPreview</a>
			<nav>
				<button id="settings-btn" onClick={toggleSettingsTab}>Settings</button>
				<ul id="settings-tab" style={{ visibility: settingsTabHidden ? "hidden" : "visible"}}>
					<li><button type="button" onClick={onSwitchTabs}>Switch tabs</button></li>
					<li><button type="button">Created By Hassan Ouammou</button></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;