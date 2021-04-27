// const baseURL = window.location.origin;
// const pathName = window.location.pathname;
// const pathIndex = pathName.lastIndexOf("/sc-campaign") + 12; // on the assumption that one has git clone from repo, and have no files named sc-campaign
const url = new URL("file:///C:/Users/KG/Projects/sc-campaign-2021/sc-campaign/index.html")
const path = url.pathname.split("/")
const uniquePath = [...new Set(path)]
const newPath = `${url.origin}${uniquePath.join("/")}${url.search}`
// console.log(newPath)
// document.write(
// 	`<base href='${
// 		baseURL + pathName.substring(0, pathIndex) + "/"
// 	}' target="_self" />`
// );

