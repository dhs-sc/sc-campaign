function generateThumbnail(candidates, type, options) {
	let html = "";
	const path = "assets/thumbnails/";
	for (let i = 0; i < candidates.length; i += 3) {
		html = html + `<div class="row text-center">`;
		for (let j = i; j < i + 3; j++) {
			if (candidates[j]) {
				const context = {
					...candidates[j],
					source: `${path}${candidates[j][`thumbnail_${type}`]}`,
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
		const groups = data.group;
		return generateThumbnail(groups, page, options);
	} else {
		const candidates = level == "sh" ? data.sh : data.jh;
		return generateThumbnail(candidates, page, options);
	}
});

$.getJSON("assets/json/student-data.json", (context) => {
	var templateScript = Handlebars.compile(
		`{{#thumbnail data}} <div class="col-4 mb-5" data-toggle="modal" data-target="#modal_{{id}}"> <h4 class="student-id">{{id}}</h4> <img src="{{source}}" class="student-img" alt="Error loading {{id}}'s photo here" /> <h4 class="student-name">{{name}}</h4> </div> {{/thumbnail}}`
	);

	var html = templateScript(context);

	$("#thumbnail").after(html);
});
