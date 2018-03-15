$(function() {
	$(window).scroll(function () {
		if ($(".header").length > 0) {
			if ($(this).scrollTop() > 0) {
				$("body").addClass("fixed-header-on");
			} else {
				$("body").removeClass("fixed-header-on");
			}
		}
	});
});

