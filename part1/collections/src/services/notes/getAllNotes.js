import axios from 'axios';

export const getAllNotes = () => { //por que 2 returns?? y en createNote no?
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response);
      const { data } = response;
      return data;
    });
};