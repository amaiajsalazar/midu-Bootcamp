import { useState } from 'react';
import './App.css';

// poner fuera para evitar que se cree cada vez que se renderiza la app
const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  mensaje: 'Mensaje en el state'
};

const ListOfClicks = ({ clicks }) => {
  console.log({ clicks });
  // debugger;
  return (
    <div>
      <p>Clicks totales: {clicks.length}</p>
      <p>{clicks.join(", ")}</p>
    </div>);
};

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>;
};

const App = () => {
  // const [left, setLeft] = useState(0) // para tener menos states
  // const [right, setRight] = useState(0)

  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const newCounterState = {
      ...counters,
      left: counters.left + 1,
      // nunca mutar objeto del state
      // counters.left++ NO!!!
    };
    setCounters(newCounterState);
    setClicks((prevClicks) => [...prevClicks, 'L']);
  };

  const handleClickRight = (event) => {
    console.log(event);
    const newCounterState = {
      ...counters,  //spreaader operator, solo sobreescribe los valores que se quieren dejando los demas intactos
      right: counters.right + 1,
    };
    setCounters(newCounterState);
    setClicks((prevClicks) => [...prevClicks, 'R']);
  };

  const handleReset = () => {
    setCounters(INITIAL_COUNTER_STATE);
    setClicks([]);
  };

  return (
    <div>
       {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {counters.right}
        
        <p>
          <button onClick={handleReset}>reset</button>
        </p>

       {clicks.length === 0 ? (<WarningNotUsed />) : (<ListOfClicks clicks={clicks} />)}
    </div>
  );
};


export default App;