document.write(
	'<link rel="stylesheet" href="assets/css/navbar.css"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <a class="navbar-left"><img src="assets/img/school-logo.png" height="50" width:="50"></a> <a class="navbar-brand" href="#">2021 Elections</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="#"><span class="sr-only">(current)</span></a> </li> <li class="nav-item dropdown active"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Campaign Groups </a> <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="campaign-groups/JHCG_main.html">Junior High</a> <a class="dropdown-item" href="campaign-groups/SHCG_main.html">Senior High</a> </div> </li> <li class="nav-item active"> <a class="nav-link" href="#">Publicity</a> </li> </ul> <div class="form-inline my-2 my-lg-0"> <div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">DH</span> </div> <input type="text" class="form-control" placeholder="Candidate Index No." aria-label="Username" aria-describedby="basic-addon1" id="uid" data-toggle="tooltip" data-placement="top" title="Please only type in numbers between 1 to 20"> <div class="input-group-append"> <button class="btn btn-primary" id="search" disabled>Search</button> </div> </div> </nav> <script src="assets/js/searchbar.js"></script>'
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
