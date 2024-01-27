import './App.css';
import { Note } from './Note.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllNotes } from './services/notes/getAllNotes.js';
import { createNote } from './services/notes/createNote.js';

const Title = () => <h1>Notes</h1>;

const App = (props) => {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  // const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      // id: notes.length + 1,
      title: newNote,
      body: newNote,
      userId: 1
      // important: Math.random() < 0.5
    };

    createNote(noteToAddToState)
      .then(newNote=>{
        setNotes(prevNote => prevNote.concat(newNote))
      })


    // console.log(notes);
    setNewNote("");
  };

  // const handleShowAll = () => {
  //   setShowAll(() => !showAll);
  // };

  useEffect(() => {
    setLoading(true);
    console.log("useEffect");
    setTimeout(() => {
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(response => response.json())
      //   .then(json => {
      //     // console.log(json)
      //     setNotes(json);
      //     setLoading(false);
      //   });
      // AXIOS VERSION
      getAllNotes()
        .then(notes =>{
          setNotes(notes)
          setLoading(false)
        })
    }, 2000);
  }, []);

  // if (typeof notes === "undefined" || notes.length === 0) {
  //   return "no tenemos notas que mostrar";
  // }

  return (
    <div>
      <Title />
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}></input>
        <button >crear nota</button>
      </form>
      {/* <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all"}</button> */}
      {loading ? <p>Loading...</p> : ""}
      <ul>
        {notes
          // .filter(note =>  showAll ? true : (note.important === true))
          .map((note) =>
            (<Note key={note.id} {...note} />)
          )}
        {/* {notes.map(note => <Note key={note.id} id={note.id} content={note.content} date={note.date} />)} */}
      </ul>


    </div>
  );
};

export default App;
