document.write(
	` <nav class="navbar navbar-expand-lg navbar-light bg-light"> <a class="navbar-left"><img src="assets/img/school-logo.png" height="50" width:="50"></a> <a class="navbar-brand" href="./index.html">2021 Elections</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="./index.html"><span class="sr-only">(current)</span></a> </li><li class="nav-item dropdown active"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Junior High </a> <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="candidates.html?p=catalogue&l=jh">Candidate Catalogue</a> <a class="dropdown-item" href="candidates.html?p=profile&l=jh">Candidates Profiles</a> <a class="dropdown-item" href="candidates.html?p=intro&l=jh">Introduction Videos</a> <a class="dropdown-item" href="candidates.html?p=fpp&l=jh">Final Project Presentations</a> </div></li><li class="nav-item dropdown active"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Senior High </a> <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="candidates.html?p=catalogue&l=sh">Candidate Catalogue</a> <a class="dropdown-item" href="candidates.html?p=profile&l=sh">Candidates Profiles</a> <a class="dropdown-item" href="candidates.html?p=intro&l=sh">Introduction Videos</a> <a class="dropdown-item" href="candidates.html?p=dtalk&l=sh">D Talk</a> </div></li><li class="nav-item active"> <a class="nav-link" href="./index.html">Publicity</a> </li></ul> </nav> `
);
$(function () {
	$(".dropdown").hover(
		function () {
			$(this).addClass("open");
		},
		function () {
			$(this).removeClass("open");
		}
	);
});
// the same as navbar.template.html, just with line-breaks removed
// line-break removing software available at https://www.textfixer.com/tools/remove-line-breaks.php
