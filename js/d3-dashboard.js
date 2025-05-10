// Dinamisks datu panelis, kas rāda Feramas aktivitāšu statistiku
d3.json("api/analytics.json").then(data => {
  d3.select("#chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("height", d => `${d.value * 10}px`);
});
