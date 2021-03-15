import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, color, geoNaturalEarth1} from "d3";
import useResizeObserver from "./useResizeObserver";

/**
 * Component that renders a map of Germany.
 */

function WorldMap({ data, property }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedRegion, setSelectedRegion] = useState(null);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    const colorArr = [color("red"), color("blue"), color("green"), color("yellow"), color("pink")]

    const colorScale = (d) => {
      return colorArr[d]
    }

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane
    const projection = geoNaturalEarth1()
      .fitSize([width, height], selectedRegion || data)
      .precision(100);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath(projection)

    // render each country
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .attr("class", "country")
      .on("click", (e, feature) => {
        setSelectedRegion(feature === selectedRegion ? null : feature)
      })
      .transition().duration(1000)
      .attr("fill", feature => colorScale(feature.properties[property]))
      .attr("d", feature => pathGenerator(feature));
  }, [data, dimensions, property, selectedRegion]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default WorldMap;
