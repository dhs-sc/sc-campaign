function showError(key) {
	switch (key) {
		case "no_input":
			$("#uid").attr(
				"data-original-title",
				"Please type candidate's input number"
			);
			break;
		case "not_a_number":
			$("#uid").attr(
				"data-original-title",
				"Please remove all non-numeric characters"
			);
			break;
		case "out_of_range":
			$("#uid").attr(
				"data-original-title",
				"Please ensure that index number is within 1 to 20"
			);
			break;
		default:
			input.attr("title", "");
	}

	$("#uid").tooltip("enable");
	$("#uid").tooltip("show");
	$("#search").attr("disabled", true);
}

function hideError() {
	$("#uid").tooltip("hide");
	$("#uid").tooltip("disable");
	$("#search").removeAttr("disabled");
}

function findGroup(uid) {
	/*
  Note: for groups follow the following format,
  - key represents group number/group name (following url of html page)
  - value is an array of candidate's index number in that group
  */
	const groups = {
		"01": ["01", "02", "03"],
		"02": ["04", "05", "06"],
	};
	for (const [group, members] of Object.entries(groups)) {
		const found = members.find((member) => member == uid);
		if (found) {
			return group;
		}
	}
	return null;
}

function userRedirect() {
	let uid = $("#uid").val().replace(/\s/g, "").replace(/^0*/g, "");
	if (parseInt(uid, 10) < 10) {
		//if value is less than 10, add in prefix 0
		uid = `0${uid}`;
	}
	const group = findGroup(uid);
	if (group) {
		location.href = `https://droopybigcosmos.redarkham1234.repl.co/campaign-groups/CG${group}.html`;
	} else {
		location.href = `https://droopybigcosmos.redarkham1234.repl.co`;
	}
}

$(document).ready(() => {
	$('[data-toggle="tooltip"]').tooltip();
	$("#uid").tooltip("disable"); // hides tooltip by default

	$("#search").click(userRedirect);

	$("#uid").keyup(() => {
		const uid = $("#uid").val();
		if (!uid.trim()) {
			showError("no_input");
			return;
		}
		if (isNaN(uid)) {
			showError("not_a_number");
			return;
		}
		if (parseInt(uid, 10) <= 0 || parseInt(uid, 10) > 20) {
			showError("out_of_range");
			return;
		}
		hideError();
	});
});
