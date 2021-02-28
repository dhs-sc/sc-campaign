const baseURL = window.location.origin;
const pathName = window.location.pathname;
const pathIndex = pathName.indexOf("/sc-campaign") + 12; // on the assumption that one has git clone from repo, and have no files named sc-campaign
document.write(
	`<base href='${
		baseURL + pathName.substring(0, pathIndex) + "/"
	}' target="_self" />`
);
