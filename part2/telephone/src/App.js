import './App.css';
import React, { useEffect, useState } from 'react';
import { getAllContacts } from './services/getAllContacts';
import { createContact } from './services/createContact';
import { deleteContact } from './services/deleteContact';
import { updateContact } from './services/updateContact';

const Title = () => (
  <h2>Phonebook</h2>
);

const Filter = ({ handleSearch, searchWord }) => (
  <div>
    <p>filter shown with <input onChange={handleSearch} value={searchWord}></input></p>
  </div>
);

const Formulario = ({ handleSubmit, handleNameChange, handlePhoneChange, newName, newPhone }) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input onChange={handleNameChange} value={newName} />
    </div>
    <div>
      phone: <input onChange={handlePhoneChange} value={newPhone} />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
);

const NumberList = ({ persons, searchWord, handleDelete }) => (

  persons
    .filter((p) => {
      if (searchWord !== undefined) {
        return p.name.toLowerCase().includes(searchWord.toLowerCase());
      } else {
        return true;
      }
    })
    .map((p) => (
      <p key={p.id}>{p.name}: {p.number} <button onClick={handleDelete(p)}>Delete</button></p>
    ))
);

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchWord, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      renderAllContacts();
    }, 1000);
  }, []);

  const renderAllContacts = () => {
    getAllContacts()
      .then(personas => {
        setPersons(personas);
        setLoading(false);
      });
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersonToAdd = {
      name: newName,
      number: newPhone
    };
    const exists = persons.some(p => p.name === newName);
    if (!exists) {
      createContact(newPersonToAdd)
        .then(newContact => {
          setPersons(prevPerson => prevPerson.concat(newContact));
          setNewName("");
          setNewPhone("");
        });
    } else {
      const pp = persons.find(p => p.name === newName);
      if (pp.number !== newPhone) {
        if (window.confirm(`${pp.name} is already added to phonebook, replacce the old number with the new one?`)) {
          updateContact(newPersonToAdd, pp.id)
          .then(()=>renderAllContacts())
          setNewName("");
          setNewPhone("");
        }
      } else {
        alert(`${newName} is already added to phonebook`);
      }
    }
  };



  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (p) => () => {
    if (window.confirm(`Delete ${p.name}?`)) {
      deleteContact(p.id)
        .then(resp => {
          resp.status === 200 ? getAllContacts().then(p => setPersons(p))
            : alert(`Something failed (status code: ${resp.status})`);
        });
    }
  };

  return (
    <div>
      <Title />
      <Filter handleSearch={handleSearch} searchWord={searchWord} />
      <h3>Add new</h3>
      <Formulario handleSubmit={handleSubmit} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} newName={newName} newPhone={newPhone} />
      <h2>Numbers</h2>
      {loading ? "Loading...." : ""}
      <NumberList persons={persons} searchWord={searchWord} handleDelete={handleDelete} />
    </div>
  );
};

export default App;