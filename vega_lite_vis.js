var map = "co2_by_country_long.json"; // Looks like it can't load this file for some reason.
var line = "co2_line_chart.json";
var stackedA = "consumption.json";
var stackedB = "consumption_by_sector.json";
var u_production = "uranium_production_by_country.json";
var energy_density_s = "energy_content.json";
var voter = "voter_opinions.json";

vegaEmbed("#continentLines", line).then(function(result) {}).catch(console.error);
vegaEmbed("#map", map).then(function(result) {}).catch(console.error);
vegaEmbed('#stackedA', stackedA).then(function(result) {}).catch(console.error);
vegaEmbed('#stackedB', stackedB).then(function(result) {}).catch(console.error);
vegaEmbed('#u_production', u_production).then(function(result) {}).catch(console.error);
vegaEmbed('#slope', energy_density_s).then(function(result) {}).catch(console.error);
vegaEmbed('#voter', voter).then(function(result) {}).catch(console.error);
