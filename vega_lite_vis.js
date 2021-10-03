var map = "co2_by_country_long.json"; // Looks like it can't load this file for some reason.
var line = "co2_line_chart.json"
vegaEmbed("#map", map).then(function(result) {}).catch(console.error);

//vegaEmbed("#line", line).then(function(result) {}).catch(console.error);