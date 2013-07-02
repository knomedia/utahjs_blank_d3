(function(){
  var svg,
      margin = {top: 40, right: 20, bottom: 20, left: 20},
      xScale,
      yScale,
      w = 960 - margin.left - margin.right,
      h = 450 - margin.top - margin.bottom,
      dataset = [29, 59, 19, 58, 89]

  function init () {
    createSvg();
    drawElements();
  }

  function createSvg () {
    svg = d3.select("#chart").append("svg")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.right);
    svg = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  }

  function drawElements () {
  }

  init();
})();
