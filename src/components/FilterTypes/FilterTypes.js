import React from "react";
import "./FilterTypes.css";
import Type from "./Type/Type";

function FilterTypes() {
  return (
    <div>
      {/* "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" */}
      {/* Delivery */}
      <div className="filter-types-types-container">
        <Type
          image="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
          text="Delivery"
        />

        <Type
          image="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
          text="Dining out"
        />

        <Type
          image="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
          text="Nightlife"
        />
      </div>
    </div>
  );
}

export default FilterTypes;
