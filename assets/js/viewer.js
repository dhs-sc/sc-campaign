function getSourceType(source) {
	let source_type = "";
	const imageFileTypes = [".png", ".jpg"];
	const videoFileTypes = [".mp4"];
	imageFileTypes.forEach((type) => {
		if (source.search(type) != -1) source_type = "image";
	});
	videoFileTypes.forEach((type) => {
		if (source.search(type) != -1) source_type = "video";
	});
	if (source.search("http") != -1) return "external";
	return source_type;
}

function generateViewer(records, page, cid, options) {
	const path = "assets/views/";
	const record = records.find((r) => r.id === cid.toUpperCase());
	const source = record[page];
	const source_type = getSourceType(source);
	const context = {
		...record,
		source_type,
		source:
			source_type == "video" || source_type == "image"
				? `${path}${source}`
				: source,
	};
	return options.fn(context);
}

Handlebars.registerHelper("viewer", function (data, options) {
	const url = new URL(window.location.href);
	const level = url.searchParams.get("l");
	const page = url.searchParams.get("p");
	const cid = url.searchParams.get("id");
	if (page == "fpp") {
		const groups = data.group[level];
		return generateViewer(groups, page, cid, options);
	}
	if (page == "catalog") {
		// if catalog, no modal is required
		return "";
	}
	const indiv = data.indiv[level];
	return generateViewer(indiv, page, cid, options);
});

Handlebars.registerHelper("isVideo", function (value) {
	return value === "video";
});

Handlebars.registerHelper("isImage", function (value) {
	return value === "image";
});

Handlebars.registerHelper("ifExternal", function (value) {
	return value === "external";
});

$.getJSON("assets/json/student-data.json", (context) => {
	var templateScript = Handlebars.compile(
		`{{#viewer data}} <div class="jumbotron text-center"> <h1 id="titleHeading">{{id}} - {{name}}</h1> </div> <div class="embedded-container"> {{#if (isVideo source_type)}} <video class="embedded-content" controls src="{{source}}"></video> {{/if}} {{#if (ifExternal source_type)}} <iframe class="embedded-content" src="{{source}}"> </iframe> {{/if}} {{#if (isImage source_type)}} <img src="{{source}}" class="embedded-content" alt="Error loading {{id}}'s photo here" /> {{/if}} </div> {{#if description}} <h6 class="mt-3 text-center pl-3 pr-3">{{description}}</h6> {{/if}} {{/viewer}}`
	);

	try {
		var html = templateScript(context);

		$("#viewer").after(html);

		const source = $(".embedded-content").attr("src");
		console.log(source);
		$.get(source).fail(() => {
			$(".embedded-container").after(
				`<h6 class="mt-3 text-center pl-3 pr-3">Note: The content has yet to be released!</h6>`
			);
			$(".embedded-container").remove();
		});
	} catch (e) {
		$("#viewer").after(
			`<div class="jumbotron text-center"> <h1 id="titleHeading">Oh no! Something went wrong! Please check your URL parameters!</h1> </div>`
		);
	}
});
