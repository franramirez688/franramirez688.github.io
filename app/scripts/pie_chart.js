var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"fontSize": 27,
			"font": "lucida sans"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 12,
			"font": "lucida sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "38%",
		"pieOuterRadius": "120%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Python",
				"value": 27,
				"color": "#ebf71a"
			},
			{
				"label": "C/C++",
				"value": 21,
				"color": "#54a9ca"
			},
			{
				"label": "CMake",
				"value": 19,
				"color": "#efefef"
			},
			{
				"label": "Git",
				"value": 24,
				"color": "#7e8dd1"
			},
			{
				"label": "HTML, CSS, JS, AngularJS",
				"value": 10,
				"color": "#e91818"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 41
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 14
		},
		"percentage": {
			"color": "#ffffff",
			"fontSize": 16,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 14
		},
		"lines": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"background": "#ffffff"
		},
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
});