import { useState } from 'react';
import './App.css';

const Counter = ({num}) => {
  return (
      <div>
        <h1>El valor del contador es:</h1>
        <h2>{num}</h2>
      </div>
  )
}


const App = () => {
  const [counterVal, updateCounter] = useState(0);

  const handleCounter = (action) => ()=> action===0 ? updateCounter(counterVal + 1) : updateCounter(counterVal - 1);
  const resetToZero = () => updateCounter(0);

  const isEven = counterVal % 2 === 0;
  const mensajePar = isEven ? 'Es par' : 'Es impar'


  const handleClick = () => {
    // console.log('clicked')
    updateCounter(counterVal+1)
    // console.log(counter)
  }

  return (
    <div>
      <Counter num={counterVal} />

      {/* renderizado condicional */}
      <p>{mensajePar}</p>
 
      {/* <button onClick={()=>setCounter(counter+1)}> */}
      <button onClick={handleCounter(0)}>plus</button>
      <button onClick={handleCounter(1)}>minus</button>
      
      {/* forma mas segura que permite utilizar el valor previo del estado
      <button onClick={() => {
        setCounter(prevCounter => {
          return prevCounter - 1;
        });
      }}>
        minus
      </button> */}

      <button onClick={resetToZero}>reset</button>

    </div>
  );
};
export default App;