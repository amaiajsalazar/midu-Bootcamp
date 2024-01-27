import axios from 'axios';

export const updateContact = (person, id) => {
    const {name, number} = person
    return axios.put(`http://localhost:3001/persons/${id}`, {name, number})
    .then(resp =>{
        return resp
    })
};