import axios from 'axios';

export const createContact = ({name, number}) =>{
    return axios.post('http://localhost:3001/persons', {name, number})
        .then(resp => {
          const { data } = resp;
          return data
        })
}