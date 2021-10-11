var map = "co2_by_country_long.json"; // Looks like it can't load this file for some reason.
var line = "co2_line_chart.json";
var stacked = "consumption.json";
var u_production = "uranium_production_by_country.json";
vegaEmbed("#continentLines", line).then(function(result) {}).catch(console.error);
vegaEmbed("#map", map).then(function(result) {}).catch(console.error);
vegaEmbed('#stacked', stacked).then(function(result) {}).catch(console.error);
vegaEmbed('#u_production', u_production).then(function(result) {}).catch(console.error);
