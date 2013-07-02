(function(){
  var svg,
      padding = 20,
      w = 960,
      h = 450,
      xScale,
      yScale,
      dataset = [29, 59, 19, 58, 89]

  function init () {
    createSvg();
    drawElements();
  }

  function createSvg () {
    svg = d3.select("#chart").append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#13373a");
    svg = svg.append("g");
  }

  function drawElements () {
  }

  init();
})();
