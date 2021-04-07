function generateThumbnail(records, page, level, options) {
	let html = "";
	const path = "assets/thumbnails/";
	for (let i = 0; i < records.length; i += 3) {
		html = html + `<div class="row text-center">`;
		for (let j = i; j < i + 3; j++) {
			if (records[j]) {
				const thumbnail = records[j][`thumbnail_${page}`];
				const context = {
					...records[j],
					source: `${path}${thumbnail}`,
					href:
						page === "catalog"
							? "#"
							: `viewer.html?p=${page.toLowerCase()}&l=${level.toLowerCase()}&id=${records[
									j
							  ].id.toUpperCase()}`,
				};
				html = html + options.fn(context);
			}
		}
		html = html + `</div>`;
	}
	return html;
}

Handlebars.registerHelper("thumbnail", function (data, options) {
	const url = new URL(window.location.href);
	const level = url.searchParams.get("l");
	const page = url.searchParams.get("p");
	if (page == "fpp") {
		const groups = data.group[level];
		return generateThumbnail(groups, page, level, options);
	} else {
		const indiv = data.indiv[level];
		return generateThumbnail(indiv, page, level, options);
	}
});

$.getJSON("assets/json/student-data.json", (context) => {
	var templateScript = Handlebars.compile(
		`{{#thumbnail data}} <div class="col-4 mb-5"> <a href="{{href}}" class="thumbnail_link"> <h4 class="student-id">{{id}}</h4> <img src="{{source}}" class="student-img" alt="Error loading {{id}}'s photo here" /> <h4 class="student-name">{{name}}</h4> </a> </div> {{/thumbnail}} `
	);

	var html = templateScript(context);

	$("#thumbnail").after(html);
});
