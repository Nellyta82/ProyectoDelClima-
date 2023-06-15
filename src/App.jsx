import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Principal from "./components/Principal";
import NavBarExample from './layouts/Navbar';

function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Principal /> } />
    <Route path='Inicio' element={ <Inicio /> } />
    <Route path='nosotros' element={ <Nosotros /> } />
    <Route path='contacto' element={ <Contacto /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;

