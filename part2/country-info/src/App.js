import { useEffect, useState } from 'react';
import './App.css';
import { getWeather } from './services/getWeather';
import { getCountries } from './services/getCountries';

const Countries = ({ countries, handleShow, showDetail, detailCountry }) => (
  countries.map((c) => (
    <p key={c.name.common}>{c.name.common} <button onClick={handleShow(c)}>{showDetail && detailCountry === c ? "Hide" : "Show"}</button></p>
  ))
);

const CountryDetail = ({ country, weather, setLoading }) =>
(<div>
  <h1>{country.name.common}</h1>
  <p>country: {country.capital}</p>
  <p>population: {country.population}</p>
  <h2>Languages</h2>
  <ul>
    {Object.entries(country.languages).map(([code, name]) => (
      <li key={code}>{name}</li>
    ))}
  </ul>
  <img src={country.flags.png} alt={country.flags.png} width='200px' />
  <h2>Weather in {country.capital}</h2>
  <p><strong>temperature: </strong>{weather.current.temperature_2m} {weather.current_units.temperature_2m}</p>
  <p><strong>wind speed: </strong>{weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</p>
</div>
);

const SearchBar = ({ handleChange, search }) => (
  <p>find countries <input onChange={handleChange} value={search}></input></p>
);

const App = () => {

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [showDetail, setShow] = useState(false);
  const [detailCountry, setDetailCountry] = useState({});
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    const searchword = event.target.value;
    setSearch(searchword);
    if (searchword !== undefined && searchword !== "") {
      getCountries(searchword)
        .then(data => {
            setCountries(data);
        })
        .catch(error => console.error(error));
    }
  };

  const handleShow = (c) => () => {
    if (detailCountry === c) {
      showDetail ? setShow(false) : setShow(true);
    } else {
      setShow(true);
      setDetailCountry(c);
      setLoading(true);
      getWeather(c)
        .then(data => {
          setWeather(data);
        })
        .then(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (countries.length === 1) {
      setShow(false);
    }
  }, [countries.length]);


  return (
    <div>
      <SearchBar handleChange={handleChange} search={search} />

      {countries.length > 10 ?
        <p>too many matches, specify another filter</p>
        : countries.length === 1 && !loading ?
          <CountryDetail country={countries[0]} weather={weather} setLoading={setLoading} />
          : <Countries countries={countries} handleShow={handleShow} showDetail={showDetail} detailCountry={detailCountry} />}

      {!showDetail ? "" :
        !loading ?
          <CountryDetail country={detailCountry} weather={weather} setLoading={setLoading} />
          : "Loading..."}
  
    </div>
  );
};

export default App;
