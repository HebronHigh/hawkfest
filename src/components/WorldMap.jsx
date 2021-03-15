import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import * as topojson from 'topojson-client'
import useResizeObserver from "./useResizeObserver";

function WorldMap() {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const t0 = {k:width/2/Math.PI,x:width/2,y:height/2};

    // projects geo-coordinates on a 2D plane
    const projection = d3.geoMercator()
    const path = d3.geoPath(projection)


    d3.json("https://d3js.org/world-110m.v1.json").then(function (world) {
      let countries = topojson.feature(world, world.objects.countries).features;
      let features = svg.selectAll("path")
        .data(countries)
        .enter()
        .append("path")

      let zoom = d3.zoom()
        .on("zoom", function (event) {
          let t = event.transform;
          projection.scale(t.k).translate([t.x, t.y]);
          features.attr("d", path)
        })

      svg.call(zoom);

      svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(width / Math.PI / 2));

      features.on("click", function (d) {
        projection.fitSize([width, height], d)
        let k = projection.scale() / t0.k
        let x = projection.translate()[0] - t0.x * k
        let y = projection.translate()[1] - t0.y * k
        svg.call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(k))
      })
    });
  }, [dimensions]);


  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default WorldMap;
