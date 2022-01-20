import React, { useEffect, useState } from "react";
import BookingsCountryData from "../../interfaces/BookingsCountryData";
import CountryListProps from "../../interfaces/CountryListProps";
import CountryListItem from "../country-list-item/CountryListItem";
import "./CountryList.css";

function CountryList(props: CountryListProps) {

  const [lineSize, setLineSize] = useState<number>(0);
  const [data, setData] = useState<BookingsCountryData[]>([])
  const [width, setWidth] = useState<string>(props.width??'394px');

  const getProgressMax = (): number => {
    return props.data.reduce(
      (acc, max) =>
        (acc = acc > max.value.nr_of_rooms ? acc : max.value.nr_of_rooms),
      0
    );
  };

  const sort = () => {
    setData(() => props.data.sort(
      (a, b) =>
        b.value.nr_of_rooms - a.value.nr_of_rooms ||
        (b.value.nr_of_rooms - b.reference_value.nr_of_rooms) -
        (a.value.nr_of_rooms - a.reference_value.nr_of_rooms)
    ));
  };

  useEffect(() => {
    sort();
  }, [])

  return (
    <div className='list' style={{width}}>
      <p className='title p-l-4 p-t-3 p-b-3'>{props.title}</p>
      <div style={{maxHeight: `${((lineSize)*5)}px`}} className='overflow-y-scroll'>
        {data.map((country) => (
          <div key={country.id} ref={el => {
            const height = el?.getBoundingClientRect().height;
            setLineSize(height??0)
          }}>
            <CountryListItem data={country} progress_max={getProgressMax()} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
