// import { fetchWeatherApi } from 'openmeteo';
import axios from 'axios'

export const getWeather = (country) => {
    const latlng = country.capitalInfo.latlng
    return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&current=temperature_2m,wind_speed_10m,wind_direction_10m`)
    .then(resp =>{
        const {data} = resp
        return data 
    })
}