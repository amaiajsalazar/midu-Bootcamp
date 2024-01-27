import axios from "axios";


export const getCountries = (txt) => {
    return axios.get(`https://restcountries.com/v3.1/name/${txt}`)
        .then(resp => {
            const { data } = resp;
            console.log(data)
            return data
        })
        // .catch(error => {
        //     if (error.response.status === 404) {
        //         console.log('Resource not found');
        //     } else {
        //         console.log(error.response.status);
        //     }
        // });
};
