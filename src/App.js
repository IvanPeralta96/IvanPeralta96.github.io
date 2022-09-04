import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Canciones from './Components/Canciones';
import Cartas from './Components/Cartas';
import Fotos from './Components/Fotos';
import Inicio from './Components/Inicio';
import ListaDeseos from './Components/ListaDeseos';



function App() {
  return (
    <>
      <div className='portada'>
      <object data="Gral/portada.svg"  height="110"> </object>
 
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
        </Routes>
       
        <Routes>
          <Route exact path="/Canciones" element={<Canciones />} />
        </Routes>
        <Routes>
          <Route exact path="/Cartas" element={<Cartas />} />
        </Routes>
        <Routes>
          <Route exact path="/Fotos" element={<Fotos />} />
        </Routes>
        <Routes>
          <Route exact path="/ListaDeseos" element={<ListaDeseos />} />
        </Routes>
      </BrowserRouter>
      <footer> <object data="Gral/footer.svg" height="70px" > </object></footer>
    </>
  );
}

export default App;
