import './App.css';
import { useState } from 'react';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));


  const nextAnecdoteBtn = () => {
    const randomNum = randomIntFromInterval(0, anecdotes.length - 1);
    return setSelected(randomNum);
  };

  const voteBtn = (selected) => () => {
    const copy = [...votes];
    copy[selected] += 1;
    return setVotes(copy);
  };

  const TriggerButton = (props) => {
    return <button onClick={props.action === 'next' ? (nextAnecdoteBtn) : (voteBtn(selected))}>
      {props.text}
    </button>;
  };

  const VoteText = () => {
    return (
      <p>has {votes[selected]} votes</p>
    );
  };

  const TopAnecdote = () => {
    let maxNum = 0;
    let index = -1;
    console.log(votes);
    if (Array.isArray(votes)) {
      maxNum = Math.max(...votes);
      if (maxNum !== 0) {
        index = votes.indexOf(maxNum);
      }
    }
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{index !== -1 ? anecdotes[index] : ""}</p>
        {index !== -1 && <p>has {maxNum} votes</p>}
      </div>
    );
  };

  return (
    <div>
      <p>{selected}</p>
      <p>{anecdotes[selected]}</p>
      <VoteText />
      <TriggerButton text='vote' action='vote' />
      <TriggerButton text='next anecdote' action='next' />
      <TopAnecdote />

    </div>
  );
};

export default App;
