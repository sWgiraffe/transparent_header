window.onload = function() {
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var classNames = document.body.className.split(/\s+/);
		if(scrollTop > 0) {
			var pos = -1;
			var len = classNames.length;
			for (let i = 0; i < len; i++) {
				if (classNames[i] == "fixed-header-on") {
					pos = i;
				}
			}
			if (pos == -1) {
				classNames[classNames.length] = "fixed-header-on";
			}
		} else {
			var pos = -1;
			var len = classNames.length;
			for (let i = 0; i < len; i++) {
				if (classNames[i] == "fixed-header-on") {
					pos = i;
				}
			}
			if (pos != -1) {
				classNames.splice(pos, 1);
			}
		}	
		document.body.className = classNames.join(" ");
	}	
};
