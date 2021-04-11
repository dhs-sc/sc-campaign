function getSourceType(source) {
	let source_type = "";
	const keywords = {
		// order of keywords key-value pairs determines priority.
		image: [".png", ".jpg"],
		video: [".mp4"],
		external: ["www.youtube.com/embed/"],
	};
	for (const keyword in keywords) {
		keywords[keyword].forEach((type) => {
			if (source.includes(type)) source_type = keyword;
		});
	}
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
		`{{#viewer data}} <div class="jumbotron text-center"> <h1 id="titleHeading">{{id}} - {{name}}</h1> </div> <div class="embedded-container"> {{#if (isVideo source_type)}} <video class="embedded-content" controls src="{{source}}"></video> {{/if}} {{#if (ifExternal source_type)}} <iframe class="embedded-content" src="{{source}}" title="Iframe Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe> {{/if}} {{#if (isImage source_type)}} <img src="{{source}}" class="embedded-content" alt="Error loading {{id}}'s photo here" /> {{/if}} </div> {{#if description}} <h6 class="mt-3 text-center pl-3 pr-3">{{description}}</h6> {{/if}} {{/viewer}}`
	);

	try {
		var html = templateScript(context);

		$("#viewer").after(html);

		let source = $(".embedded-content").attr("src");

		// include logic to change url to test for existence of asset here.
		if (source.includes("www.youtube.com/embed/")) {
			const url = new URL(source);
			const vid = url.pathname.replace("/embed/", "");
			source = `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${vid}`;
		}

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
