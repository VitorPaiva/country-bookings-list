import React, { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/country-list/CountryList';
import sample from './data/guest-country-sample.json'
import BookingsCountryData from './interfaces/BookingsCountryData';

function App() {
  const [data, setData] = useState<BookingsCountryData[]>([]);
  const [loaded, setLoaded] = useState<boolean>();


  useEffect(() => {
    fetch('https://data.otainsight.com/public-data/frontend-hiring/guest-country-sample.json')
    .then(res => {
      res.json()
    })
    .then( (json: any) => {
      setData(json.guest_country)
    })
    .catch(e => {
      setData(sample.guest_country)
    })
    .finally(() => {
      setLoaded(true);
    })
  }, [])

  return (
    loaded ? <CountryList title='Guest Country' data={data}/> : <div></div>
  );
}

export default App;
