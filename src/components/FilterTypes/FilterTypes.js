import React from "react";
import "./FilterTypes.css";
import Type from "./Type/Type";

function FilterTypes() {
  const typesData = [
    {
      id: 1,
      image:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      text: "Delivery",
    },
    {
      id: 2,
      image:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      text: "Nightlife",
    },
    {
      id: 3,
      image:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      text: "Nightlife",
    },
  ];

  return (
    <div>
      {/* "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" */}
      {/* Delivery */}
      <div className="filter-types-types-container">
        {typesData.map((val) => (
          <Type image={val.image} text={val.text} />
        ))}
      </div>
    </div>
  );
}

export default FilterTypes;
