Handlebars.registerHelper("title", function (titles, options) {
	const url = new URL(window.location.href);
	const page = url.searchParams.get("p");
	const level = url.searchParams.get("l");
	for (const t of titles) {
		if (t.id == page) {
			return options.fn({
				...t,
				level: level == "sh" ? "SH" : "JH",
			});
		}
	}
});

var context = {
	titles: [
		{
			id: "profile",
			name: "Candidate's Profile",
		},
		{
			id: "intro",
			name: "Introduction Video",
		},
		{
			id: "dtalk",
			name: "DTalk",
		},
		{
			id: "fpp",
			name: "Final Presentation Project",
		},
	],
};

var templateScript = Handlebars.compile(
	`<div class='jumbotron text-center'> <h1 id="titleHeading">{{#title titles}}{{level}} - {{name}}{{/title}}</h1> </div>`
);

var html = templateScript(context);

$("#title").after(html);
