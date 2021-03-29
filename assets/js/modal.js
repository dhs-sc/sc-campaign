function generateModal(candidates, type, options) {
	let html = "";
	const path = "assets/modals/";
	for (let i = 0; i < candidates.length; i += 3) {
		for (let j = i; j < i + 3; j++) {
			if (candidates[j]) {
				const video = candidates[j][type];
				const context = {
					...candidates[j],
					source: video.search("http") != -1 ? video : `${path}${video}`,
				};
				html = html + options.fn(context);
			}
		}
	}
	return html;
}

Handlebars.registerHelper("modal", function (data, options) {
	const url = new URL(window.location.href);
	const level = url.searchParams.get("l");
	const page = url.searchParams.get("p");
	if (page == "fpp") {
		const groups = data.group;
		return generateModal(groups, page, options);
	} else {
		const candidates = level == "sh" ? data.sh : data.jh;
		return generateModal(candidates, page, options);
	}
});

$.getJSON("assets/json/student-data.json", (context) => {
	var templateScript = Handlebars.compile(
		`{{#modal data}} <div class="modal fade" id="modal_{{id}}" tabindex="-1" aria-labelledby="modalLabel_{{id}}" aria-hidden="true"> <div class="modal-dialog modal-xl modal-dialog-centered"> <div class="modal-content"> <div class="modal-header"> <h2 class="modal-title col-12 text-center" id="modalLabel_{{id}}">{{id}} {{#if name}}({{name}}){{/if}}</h2> <button type="button" class="close modal-close-x" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <iframe src="{{source}}" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" onerror="alert('tf')" > </iframe> {{#if description}}<h5 class="mt-3">{{description}}</h5>{{/if}} </div> <div class="modal-footer"> <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button> </div> </div> </div> </div> {{/modal}}`
	);

	var html = templateScript(context);

	$("#modal").after(html);
});
