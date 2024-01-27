
export const Countries = ({ countries, handleShow, detailCountry }) => (
    countries.map((c) => (
        <p key={c.name.common}>{c.name.common} <button onClick={handleShow(c)}>{detailCountry === c ? "Hide" : "Show"}</button></p>
    ))
);

export const CountryDetail = ({ country, weather }) =>
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

export const SearchBar = ({ handleChange, search }) => (
    <p>find countries <input onChange={handleChange} value={search}></input></p>
);
