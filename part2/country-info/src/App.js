import { useEffect, useState } from 'react';
import './App.css';
import { getWeather } from './services/getWeather';
import { getCountries } from './services/getCountries';
import { Countries, CountryDetail, SearchBar } from './components/components';

const App = () => {

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
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
      setDetailCountry({});
    } else {
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
    if(countries.length === 1) setDetailCountry({})
  }, [countries.length]);


  return (
    <div>
      <SearchBar handleChange={handleChange} search={search} />

      {countries.length > 10 ?
        <p>too many matches, specify another filter</p>
        : countries.length === 1 && !loading ?
          <CountryDetail country={countries[0]} weather={weather} />
          : <Countries countries={countries} handleShow={handleShow} detailCountry={detailCountry} />}

      {Object.keys(detailCountry).length === 0 ? "" :
        !loading ?
          <CountryDetail country={detailCountry} weather={weather} />
          : "Loading..."}
    </div>
  );
};

export default App;