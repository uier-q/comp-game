﻿window.initX = 0;
window.initY = 0;
window.initWidth = 1920;
window.initHeight = 1024;
window.hitTest = function(x, y) {
	var element = jQuery.findAt(x, y);
	if (element) {
		if (element.hasClass("gradient")) {
			var left = element.offset().left;
			var top = element.offset().top;
			var right = left + element.width();
			var bottom = top + element.height();
			if (x >= left + 100 && x <= right - 100 &&
			    y >= top + 150 && y <= bottom - 150)
			{
				return 9;					    
			}

		}
	}
	return 0;
};
