import './App.css';
import Mensaje from './Mensaje.js';
// crear componentes siempre fuera
// nunca crear componentes dentro de otro componente
// tienen que estar separados (por ejemplo en archivos separados)

// los componentes tienen que estar en mayuscula!!!
const Description = ()=> {
  return <p>Esta es la app del curso Full Stack</p>
}

const App = () => {
// function App() { // es lo mismo

  return (
    <div className="App"> 
      <Mensaje color='red' msg='Estamos trabajando en un curso de react' />
      <Mensaje color='green' msg='en un curso' />
      <Mensaje color='yellow' msg='de react' />
      <Description />
    </div>
  );
}

// abreviado
// const App = () => (
//   <div className="App">
//     Hola Mundo!!
//   </div>
// )

export default App;
