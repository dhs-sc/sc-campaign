const baseURL = window.location.origin;
const pathName = window.location.pathname;
const pathIndex = pathName.lastIndexOf("/sc-campaign"); // on the assumption that one has git clone from repo, and have no files named sc-campaign
const finalPath =
	pathIndex !== -1 ? baseURL + pathName.substring(0, pathIndex + 12) : baseURL;
document.write(`<base href='${finalPath + "/"}' target="_self" />`);
