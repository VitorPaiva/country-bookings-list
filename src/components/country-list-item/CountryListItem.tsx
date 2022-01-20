import React from "react";
import { COUNTRY_CODE_MAPPING } from "../../data/country-mapping";
import CountryListItemProps from "../../interfaces/CountryListItemProps";
import "./CountryListItem.css";

function CountryListItem(props: CountryListItemProps) {
  const MAPPING: any = COUNTRY_CODE_MAPPING; //Line to bypass Typescript errors with types

  const change =
    props.data.value.nr_of_rooms - props.data.reference_value.nr_of_rooms;

  const getClasses = (): string => {
    return change > 0 ? "text-success" : change < 0 ? "text-danger" : "";
  };

  return (
    <div className="flex-container p-l-4 p-r-4 p-t-2 p-b-2 border-top">
      <div id="left">
        <div className="flex-container">
          <div className="left flex-grow-6">
            {MAPPING[props.data.display_code]}
          </div>
          <div className="right flex-grow-6">
            {props.data.value.nr_of_rooms}
          </div>
        </div>
        <div>
          <meter
            value={props.data.value.nr_of_rooms}
            max={props.progress_max}
            className="w-100"
          ></meter>
        </div>
      </div>
      <div id="right">
        <div className={getClasses()}>
          {change >= 0 ? `+${change}` : `${change}`}
        </div>
        <div className="label-text">vs. Last Year</div>
      </div>
    </div>
  );
}
export default CountryListItem;
