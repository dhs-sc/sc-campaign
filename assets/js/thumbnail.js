function generateThumbnail(records, page, options) {
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
		return generateThumbnail(groups, page, options);
	} else {
		const indiv = data.indiv[level];
		return generateThumbnail(indiv, page, options);
	}
});

$.getJSON("assets/json/student-data.json", (context) => {
	var templateScript = Handlebars.compile(
		`{{#thumbnail data}} <div class="col-4 mb-5" data-toggle="modal" data-target="#modal_{{id}}"> <h4 class="student-id">{{id}}</h4> <img src="{{source}}" class="student-img" alt="Error loading {{id}}'s photo here" /> <h4 class="student-name">{{name}}</h4> </div> {{/thumbnail}}`
	);

	var html = templateScript(context);

	$("#thumbnail").after(html);
});
